/**
 * P2482 [SDOI2010] 猪国杀 — TypeScript 实现
 *
 * 经典大型模拟题（省选/NOI-）。模拟简化版三国杀类卡牌游戏。
 *
 * 卡牌: P=桃 K=杀 D=闪 F=决斗 N=南猪入侵 W=万箭齐发 J=无懈可击 Z=猪哥连弩
 * 角色: MP=主猪(1只) ZP=忠猪 FP=反猪
 *
 * 输入格式:
 *   n m
 *   MP/Role card1 card2 card3 card4  (n行，每只猪的角色+初始4手牌)
 *   card1 card2 ... card_m           (牌堆，从上到下)
 *
 * 输出格式:
 *   MP/FP           (胜方)
 *   手牌或DEAD       (n行，每只存活猪的手牌，死亡的输出DEAD)
 */

// ============ 类型 ============
type Role = "MP" | "ZP" | "FP";
type Card = "P" | "K" | "D" | "F" | "N" | "W" | "J" | "Z";
type Identity = "unknown" | "loyal" | "rebel" | "like_rebel";

// ============ Pig ============
class Pig {
  id: number;
  role: Role;
  hp = 4;
  readonly maxHp = 4;
  hand: Card[] = [];
  equipped = false;
  identity: Identity;
  dead = false;

  constructor(id: number, role: Role, cards: Card[]) {
    this.id = id;
    this.role = role;
    this.hand = [...cards];
    this.identity = role === "MP" ? "loyal" : "unknown";
  }

  alive() { return !this.dead; }

  rm(card: Card) { const i = this.hand.indexOf(card); if (i !== -1) this.hand.splice(i, 1); }
  rmAt(i: number): Card { return this.hand.splice(i, 1)[0]; }
  add(c: Card) { this.hand.push(c); }
  addAll(cs: Card[]) { this.hand.push(...cs); }
  has(c: Card) { return this.hand.includes(c); }
}

// ============ Game ============
class PigGame {
  pigs: Pig[];
  readonly n: number;
  deck: Card[];
  dp = 0;
  winner: "MP" | "FP" | null = null;
  killUsed = false;
  curTurn = 0;
  maxTurns: number;
  turnCount = 0;

  constructor(n: number, _m: number, roles: Role[], hands: Card[][], deck: Card[], maxTurns = 50000) {
    this.n = n;
    this.pigs = roles.map((r, i) => new Pig(i + 1, r, hands[i]));
    this.deck = deck;
    this.maxTurns = maxTurns;
  }

  // ---- 牌堆 ----
  draw1(): Card {
    if (this.dp < this.deck.length) return this.deck[this.dp++];
    return this.deck[this.deck.length - 1]; // 牌堆空，反复摸最后一张
  }
  drawN(n: number): Card[] { return Array.from({ length: n }, () => this.draw1()); }

  // ---- 导航 ----
  nextAlive(from: number): number {
    for (let i = 1; i <= this.n; i++) {
      const idx = (from + i) % this.n;
      if (this.pigs[idx].alive()) return idx;
    }
    return from; // 只剩自己
  }

  /** 逆时针距离 */
  dist(a: number, b: number): number {
    if (a === b) return 0;
    let d = 0;
    for (let i = 1; i <= this.n; i++) {
      const idx = (a + i) % this.n;
      if (idx === b) return d + 1;
      if (this.pigs[idx].alive()) d++;
    }
    return d + 1;
  }

  mpI(): number { return this.pigs.findIndex(p => p.role === "MP"); }

  // ---- 身份判断 ----
  isAlly(a: Pig, b: Pig): boolean {
    if (a.role === "MP") return b.identity === "loyal";
    if (a.role === "ZP") return b.role === "MP" || b.identity === "loyal";
    if (a.role === "FP") return b.identity === "rebel";
    return false;
  }

  isEnemy(a: Pig, b: Pig): boolean {
    if (a.role === "MP") return b.identity === "rebel" || b.identity === "like_rebel";
    if (a.role === "ZP") return b.identity === "rebel";
    if (a.role === "FP") return b.role === "MP" || b.identity === "loyal";
    return false;
  }

  /** 会对 target 献殷勤（出 J 保护）吗？ */
  wGoodwill(pig: Pig, target: Pig): boolean {
    if (target.identity === "unknown") {
      if (pig.role === "MP" && target.role === "MP") return true;
      return false; // 不对未表明身份的猪献殷勤
    }
    return this.isAlly(pig, target);
  }

  /** 会对 target 表敌意（出 J 攻击保护）吗？ */
  wAnimosity(pig: Pig, target: Pig): boolean {
    return this.isEnemy(pig, target);
  }

  // ---- 跳身份 ----
  jump(pig: Pig, action: "goodwill" | "animosity", target: Pig) {
    if (pig.identity !== "unknown") return;
    if (action === "goodwill") {
      if (target.role === "MP" || target.identity === "loyal") { if (pig.role === "ZP") pig.identity = "loyal"; }
      else if (target.identity === "rebel") { if (pig.role === "FP") pig.identity = "rebel"; }
    } else {
      if (target.role === "MP" || target.identity === "loyal") { if (pig.role === "FP") pig.identity = "rebel"; }
      else if (target.identity === "rebel") { if (pig.role === "ZP") pig.identity = "loyal"; }
    }
  }

  // ---- 找表敌意目标 ----
  /** 找 pig 的表敌意目标（不检查距离，K 的距离检查单独做） */
  findTarget(pig: Pig): number | null {
    if (pig.role === "MP") {
      let cur = this.nextAlive(pig.id - 1); const s = cur;
      if (cur === pig.id - 1) return null; // 只剩自己
      do {
        const t = this.pigs[cur];
        if (t.identity === "rebel" || t.identity === "like_rebel") return cur;
        cur = this.nextAlive(cur);
      } while (cur !== s);
      return null;
    }
    if (pig.role === "ZP") {
      let cur = this.nextAlive(pig.id - 1); const s = cur;
      if (cur === pig.id - 1) return null;
      do {
        if (this.pigs[cur].identity === "rebel") return cur;
        cur = this.nextAlive(cur);
      } while (cur !== s);
      return null;
    }
    if (pig.role === "FP") {
      const mi = this.mpI();
      if (this.pigs[mi].alive()) return mi; // FP 优先打 MP，不检查距离（F 无距离限制）
      let cur = this.nextAlive(pig.id - 1); const s = cur;
      if (cur === pig.id - 1) return null;
      do {
        if (this.pigs[cur].identity === "loyal") return cur;
        cur = this.nextAlive(cur);
      } while (cur !== s);
    }
    return null;
  }

  // ---- 手牌扫描 ----
  findPlayable(pig: Pig): number {
    for (let i = 0; i < pig.hand.length; i++) {
      const c = pig.hand[i];
      switch (c) {
        case "P": if (pig.hp < pig.maxHp) return i; break;
        case "Z": if (!pig.equipped) return i; break;
        case "N": case "W": return i;
        case "K":
          if (this.killUsed && !pig.equipped) break;
          { const t = this.findTarget(pig); if (t !== null && this.dist(pig.id - 1, t) === 1) return i; }
          break;
        case "F":
          if (this.findTarget(pig) !== null) return i;
          break;
      }
    }
    return -1;
  }

  // ---- 游戏结束 ----
  checkEnd(): boolean {
    if (this.pigs[this.mpI()].dead) { this.winner = "FP"; return true; }
    if (!this.pigs.some(p => p.role === "FP" && p.alive())) { this.winner = "MP"; return true; }
    return false;
  }

  // ---- 伤害 & 死亡 ----
  /** @returns 目标是否死亡 */
  damage(srcI: number, tgtI: number): boolean {
    this.pigs[tgtI].hp--;
    if (this.pigs[tgtI].hp <= 0) return this.dying(tgtI, srcI);
    return false;
  }

  /** 濒死救助 */
  dying(tgtI: number, srcI: number): boolean {
    const tgt = this.pigs[tgtI];
    while (tgt.hp <= 0 && tgt.has("P")) {
      tgt.rm("P");
      tgt.hp++;
      // 回合外最多回到 1 血
      if (tgt.hp > 0 && tgtI !== this.curTurn && tgt.hp > 1) { tgt.hp = 1; break; }
    }
    if (tgt.hp <= 0) return this.kill(tgtI, srcI);
    return false;
  }

  /** 死亡结算 */
  kill(tgtI: number, srcI: number): boolean {
    const tgt = this.pigs[tgtI];
    const src = this.pigs[srcI];
    tgt.dead = true; tgt.hand = []; tgt.equipped = false;

    if (this.checkEnd()) return true;

    if (tgt.role === "FP") src.addAll(this.drawN(3));
    if (tgt.role === "ZP" && src.role === "MP") { src.hand = []; src.equipped = false; }
    return false;
  }

  // ---- 无懈可击链 ----
  /**
   * @param isProtectLayer false=伤害层(可用J保护), true=保护层(可用J攻击保护)
   * @returns true=效果被抵消
   */
  askJ(srcI: number, tgtI: number, isProtectLayer: boolean): boolean {
    let cur = srcI;
    const tgt = this.pigs[tgtI];

    for (let safety = 0; safety < 5000; safety++) {
      const next = this.nextAlive(cur);
      if (next === cur) break;
      cur = next;
      if (cur === srcI) break; // 回到起点

      const pig = this.pigs[cur];
      if (!pig.alive() || !pig.has("J")) continue;

      let use: boolean;
      let act: "goodwill" | "animosity";

      if (!isProtectLayer) {
        use = this.wGoodwill(pig, tgt); act = "goodwill";
      } else {
        use = this.wAnimosity(pig, tgt); act = "animosity";
      }

      if (use) {
        pig.rm("J");
        this.jump(pig, act, tgt);
        if (!this.askJ(cur, tgtI, !isProtectLayer)) return true; // J 未被抵消 → 生效
        // J 被抵消 → 继续循环
      }
    }
    return false;
  }

  // ---- 南猪入侵 ----
  doN(srcI: number): boolean {
    this.pigs[srcI].rm("N");
    for (let off = 1; off < this.n; off++) {
      if (this.winner) return true;
      const ti = (srcI + off) % this.n;
      const tgt = this.pigs[ti];
      if (!tgt.alive()) continue;

      if (!this.askJ(srcI, ti, false)) {
        if (tgt.has("K")) { tgt.rm("K"); }
        else {
          const died = this.damage(srcI, ti);
          if (this.winner) return true;
          if (tgt.role === "MP" && this.pigs[srcI].identity === "unknown") {
            this.pigs[srcI].identity = "like_rebel";
          }
          if (died) continue;
        }
      }
    }
    return this.winner !== null;
  }

  // ---- 万箭齐发 ----
  doW(srcI: number): boolean {
    this.pigs[srcI].rm("W");
    for (let off = 1; off < this.n; off++) {
      if (this.winner) return true;
      const ti = (srcI + off) % this.n;
      const tgt = this.pigs[ti];
      if (!tgt.alive()) continue;

      if (!this.askJ(srcI, ti, false)) {
        if (tgt.has("D")) { tgt.rm("D"); }
        else {
          const died = this.damage(srcI, ti);
          if (this.winner) return true;
          if (tgt.role === "MP" && this.pigs[srcI].identity === "unknown") {
            this.pigs[srcI].identity = "like_rebel";
          }
          if (died) continue;
        }
      }
    }
    return this.winner !== null;
  }

  // ---- 决斗 (F牌已移除) ----
  doF(srcI: number, tgtI: number): boolean {
    if (this.askJ(srcI, tgtI, false)) return false;

    let atk = tgtI, def = srcI;
    for (let s = 0; s < 50000; s++) {
      const ap = this.pigs[atk];
      const dp = this.pigs[def];
      let fight = ap.has("K");
      if (ap.role === "ZP" && dp.role === "MP") fight = false;
      if (fight) { ap.rm("K"); }
      else { return this.damage(def, atk); }
      [atk, def] = [def, atk];
    }
    return false;
  }

  // ---- 出牌阶段 ----
  playPhase(pi: number): boolean {
    const pig = this.pigs[pi];

    for (let s = 0; s < 50000; s++) {
      if (this.winner) return true;
      const ci = this.findPlayable(pig);
      if (ci === -1) return false;
      const card = pig.hand[ci];

      switch (card) {
        case "P":
          pig.rmAt(ci); pig.hp = Math.min(pig.hp + 1, pig.maxHp); break;
        case "Z":
          pig.rmAt(ci); pig.equipped = true; break;
        case "N":
          if (this.doN(pi)) return true; break;
        case "W":
          if (this.doW(pi)) return true; break;
        case "K": {
          const t = this.findTarget(pig);
          if (t === null || this.dist(pi, t) !== 1) break;
          if (this.killUsed && !pig.equipped) break;
          pig.rmAt(ci); this.killUsed = true;
          this.jump(pig, "animosity", this.pigs[t]);
          if (this.pigs[t].has("D")) { this.pigs[t].rm("D"); }
          else { if (this.damage(pi, t)) return true; }
          break;
        }
        case "F": {
          const t = this.findTarget(pig);
          if (t === null) break;
          pig.rmAt(ci);
          this.jump(pig, "animosity", this.pigs[t]);
          if (this.doF(pi, t)) return true;
          break;
        }
      }
    }
    return false;
  }

  // ---- 回合 ----
  doTurn(pi: number) {
    this.curTurn = pi; this.turnCount++;
    this.pigs[pi].addAll(this.drawN(2));
    this.killUsed = false;
    this.playPhase(pi);
  }

  // ---- 主循环 ----
  run() {
    let pi = 0;
    while (!this.winner && this.turnCount < this.maxTurns) {
      if (this.pigs[pi].alive()) this.doTurn(pi);
      if (this.winner) break;
      pi = (pi + 1) % this.n;
    }
    if (!this.winner) throw new Error(`超过最大回合数 ${this.maxTurns}，游戏可能无法终止`);
  }

  // ---- 输出 ----
  result(): string {
    const out = [this.winner!];
    for (const p of this.pigs) out.push(p.dead ? "DEAD" : p.hand.join(" "));
    return out.join("\n");
  }
}

// ============ 入口 ============
function solve(input: string, maxTurns = 50000): string {
  const lines = input.trim().split("\n").filter(l => l.trim());
  const [n, m] = lines[0].split(" ").map(Number);
  const roles: Role[] = [];
  const hands: Card[][] = [];
  for (let i = 0; i < n; i++) {
    const p = lines[1 + i].split(" ");
    roles.push(p[0] as Role);
    hands.push(p.slice(1) as Card[]);
  }
  const deck = (lines[1 + n]?.split(" ") ?? []) as Card[];
  const g = new PigGame(n, m, roles, hands, deck, maxTurns);
  g.run();
  return g.result();
}

// ============ 测试用例 ============

interface TestCase {
  name: string;
  input: string;
  expected?: string;
}

const testCases: TestCase[] = [
  // ---- 官方样例 ----
  {
    name: "样例 #1 (官方) — 类反猪标记 + 主猪杀忠猪 + 反猪补刀",
    input: `3 10
MP D D F F
ZP N N N D
FP J J J J
F F D D J J F F K D`,
    expected: `FP
DEAD
DEAD
J J J J J J D`,
  },

  // ---- 反猪速胜: FP有连弩+多K，穿MP的D后击杀 ----
  {
    name: "样例 #2 — 反猪连弩速胜 (2猪)",
    input: `2 6
MP D D P P
FP Z K K K
K K K K K K`,
    // FP先手装连弩→3K穿MP的2D+伤1血→下回合MP无D→FP补刀胜
  },

  // ---- 主猪获胜: FP先手K攻击暴露身份，MP连弩反杀 ----
  {
    name: "样例 #3 — 主猪连弩反杀 (2猪)",
    input: `2 8
MP Z K D K
FP K K D D
K K K K K K K K`,
    // FP起手用K→MP闪→FP暴露rebel→MP装连弩→4K穿FP的2D+伤2血
    // →下回合MP补刀→MP胜
  },

  // ---- 3猪: 无懈可击链测试 ----
  {
    name: "样例 #4 — 无懈可击链 (3猪)",
    input: `3 12
MP K D F F
ZP J D P P
FP K K N D
K K K F Z N W J D K P D`,
    // FP用N→ZP用J保护MP→FP用J攻击ZP的J→无懈链演示
  },
];

// ---- 运行 ----
console.log("P2482 [SDOI2010] 猪国杀 — TypeScript 测试\n");

let passed = 0, failed = 0;

for (const tc of testCases) {
  console.log("=".repeat(64));
  console.log(tc.name);
  console.log("=".repeat(64));

  let result: string;
  try {
    result = solve(tc.input);
  } catch (e: any) {
    console.log(`错误: ${e.message}`);
    failed++;
    console.log();
    continue;
  }

  console.log(result);

  if (tc.expected) {
    if (result.trim() === tc.expected.trim()) {
      console.log("✓ 通过");
      passed++;
    } else {
      console.log("✗ 输出不匹配");
      console.log("期望:");
      console.log(tc.expected);
      failed++;
    }
  } else {
    console.log("(请手动验证此测试用例)");
  }
  console.log();
}

console.log("=".repeat(64));
console.log(`测试结果: ${passed} 通过, ${failed} 失败, ${testCases.length - passed - failed} 待手动验证`);
console.log("=".repeat(64));

export { Pig, PigGame, solve };
