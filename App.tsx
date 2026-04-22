/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  ShieldCheck,
  Users,
  Cpu,
  Layers,
  ChevronRight,
  Navigation2,
  Fingerprint,
  Activity,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
} from "recharts";
import { cn } from "./lib/utils";

const chartData = [
  { time: "10:00", flow: 400, capacity: 800 },
  { time: "11:00", flow: 700, capacity: 800 },
  { time: "12:00", flow: 950, capacity: 800 },
  { time: "13:00", flow: 600, capacity: 800 },
  { time: "14:00", flow: 1200, capacity: 800 },
  { time: "15:00", flow: 800, capacity: 800 },
  { time: "16:00", flow: 500, capacity: 800 },
];

interface FeatureCardProps {
  icon: any;
  title: string;
  description: string;
  delay?: number;
  index: number;
  key?: string | number;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
  index,
}: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group p-8 border-l border-white/10 bg-white/2 hover:bg-white/5 transition-all cursor-default"
    id={`feature-${title.toLowerCase().replace(/\s+/g, "-")}`}
  >
    <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 mb-6 font-mono">
      0{index + 1} / {title}
    </div>
    <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-emerald-500/50 transition-colors">
      <Icon className="w-5 h-5 text-emerald-400" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2 font-sans tracking-tight">
      {title}
    </h3>
    <p className="text-zinc-500 leading-relaxed text-xs font-sans uppercase tracking-wider">
      {description}
    </p>
  </motion.div>
);

const CaseStudy = ({
  title,
  subtitle,
  content,
  tags,
}: {
  title: string;
  subtitle: string;
  content: string;
  tags: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -8 }}
    viewport={{ once: true }}
    className="p-8 bg-white/5 border border-white/10 backdrop-blur-sm mb-6 hover:border-emerald-500/30 transition-all duration-300 hover:bg-gradient-to-br hover:from-white/10 hover:to-emerald-500/5 group/card"
  >
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-0.5 bg-emerald-500 text-black text-[9px] font-black uppercase tracking-widest"
        >
          {tag}
        </span>
      ))}
    </div>
    <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">
      {title}
    </h4>
    <p className="text-emerald-400 font-medium mb-4 text-xs uppercase tracking-widest">
      {subtitle}
    </p>
    <p className="text-zinc-400 text-sm leading-relaxed italic border-l border-zinc-800 pl-4">
      "{content}"
    </p>
  </motion.div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0D0D0E] text-[#E0E0E0] font-sans selection:bg-emerald-500 selection:text-black overflow-x-hidden"
      id="main-container"
    >
      {/* Aesthetic Background Decoration */}
      <div className="fixed top-0 right-0 p-8 opacity-5 pointer-events-none z-0">
        <div className="text-[15rem] font-bold leading-none tracking-tighter select-none">
          AI
          <br />
          AGENT
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-black/90 backdrop-blur-md border-white/10 py-4"
            : "bg-transparent border-transparent py-8",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <img src="src\assets\logo.png" alt="Logo" className="h-20 w-auto" />
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.3em] uppercase">
            <a
              href="#summary"
              className="text-white/50 hover:text-emerald-400 transition-colors"
            >
              Summary
            </a>
            <a
              href="#tech"
              className="text-white/50 hover:text-emerald-400 transition-colors"
            >
              Architecture
            </a>
            <a
              href="#cases"
              className="text-white/50 hover:text-emerald-400 transition-colors"
            >
              Verification
            </a>
            <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all">
              ANALYZE NOW
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative pt-40 pb-20 px-6 min-h-screen flex items-center z-10"
        id="hero"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest italic">
                Status: Deployable 2026
              </span>
              <span className="text-[10px] uppercase tracking-widest opacity-30 font-mono">
                Research Framework v2.4
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1] tracking-tighter font-sans uppercase">
              AI Agent & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                Crowd Digital Twin
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 max-w-xl font-light leading-relaxed">
              以 AI
              Agent、數位分身與動態權重調整為核心之隱私保護式個人化引流與人流安全決策系統。
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <button className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-emerald-500 transition-all">
                Analyze Cases
              </button>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                <div className="w-12 h-px bg-white/20" />
                SYNTREND | ACF FESTIVAL
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-64 h-64 border border-dashed border-emerald-500 rounded-full animate-pulse" />
              <div className="absolute w-[400px] h-[400px] border border-blue-500/20 rounded-full" />
            </div>

            <div className="relative z-10 p-8 bg-white/2 border border-white/10 backdrop-blur-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-emerald-400">
                  <Activity className="w-3 h-3" /> Perception Layer
                </span>
                <span className="text-[10px] font-mono text-white/30">
                  ID: Z-98_TAIPEI
                </span>
              </div>

              <div className="h-48 w-full border-b border-white/5 pb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient
                        id="colorFlow"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#10b981"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#10b981"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#ffffff05"
                      vertical={false}
                    />
                    <XAxis dataKey="time" hide />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0D0D0E",
                        border: "1px solid #ffffff10",
                        borderRadius: "0",
                      }}
                      itemStyle={{ color: "#10b981", fontSize: "12px" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="flow"
                      stroke="#10b981"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorFlow)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/40 mb-2">
                    Sim Accuracy
                  </p>
                  <p className="text-3xl font-black font-mono text-white tracking-tighter">
                    98.2<span className="text-xs text-white/20">%</span>
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/40 mb-2">
                    Optimization
                  </p>
                  <p className="text-3xl font-black font-mono text-emerald-500 tracking-tighter">
                    +35<span className="text-xs opacity-50">%</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 border-l-4 border-emerald-500 bg-white/5 backdrop-blur-md">
              <div className="text-[10px] uppercase text-white/50 mb-1 tracking-widest font-bold">
                Decision Engine
              </div>
              <div className="text-lg font-bold tracking-tight">
                多代理人模擬 (Multi-Agent Sim)
              </div>
              <div className="mt-3 h-1 bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "66%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="bg-emerald-500 h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summary Section / Core Statement */}
      <section
        className="py-32 px-6 bg-[#0a0a0b] relative border-y border-white/5"
        id="summary"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-emerald-400 mb-8 border-l-2 border-emerald-500 pl-4 font-bold">
              Concept Summary
            </h2>
            <div className="writing-mode-vertical hidden md:block text-[40px] font-black text-white/5 uppercase tracking-tighter mt-12">
              Human-Centric Intelligence
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-4xl lg:text-5xl font-light text-white mb-16 leading-[1.2] tracking-tight">
              本研究提出一套整合{" "}
              <span className="text-emerald-400 italic">AI Agent</span>
              、數位分身與模擬推薦的智慧管理架構。
            </p>
            <div className="grid md:grid-cols-2 gap-12 text-left border-t border-white/10 pt-12">
              <div>
                <h4 className="text-white font-black mb-4 uppercase text-xs tracking-widest">
                  01 / The Challenge
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed uppercase tracking-wider">
                  傳統管理難以及時反映高人流場域爆量。松山文創與三創場域現狀顯示，亟需具備感知與動態調整能力。
                </p>
              </div>
              <div>
                <h4 className="text-white font-black mb-4 uppercase text-xs tracking-widest">
                  02 / The Solution
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed uppercase tracking-wider">
                  採用數位分身與聯邦學習機制，在保護隱私下提供柔性引流。AI Agent
                  轉化為推演與推薦之智慧核心。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Architecture */}
      <section className="py-32 px-6" id="tech">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-24">
            <div className="max-w-2xl">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-emerald-400 mb-6 font-bold">
                L1 - L7 Layers
              </h2>
              <h3 className="text-5xl font-black text-white tracking-tighter uppercase">
                系統架構層級 (The Stack)
              </h3>
            </div>
            <div className="hidden lg:block text-right">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">
                Future Ready Framework
              </div>
              <div className="h-1 w-24 bg-emerald-500 ml-auto mt-2" />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-px bg-white/5 border border-white/10">
              {[
                {
                  icon: Layers,
                  title: "數位分身 (Digital Twin)",
                  desc: "場域環境鏡像與瓶頸預測 (Environment Mirroring)",
                },
                {
                  icon: Cpu,
                  title: "AI Agent 推演",
                  desc: "多代理人模擬與多目標決策 (Multi-Agent Sim)",
                },
                {
                  icon: Navigation2,
                  title: "動態權重調整",
                  desc: "基於偏好與擁擠成本的權重調配 (Dynamic Weighting)",
                },
                {
                  icon: ShieldCheck,
                  title: "隱私保護引流",
                  desc: "聯邦推薦技術與最小資料蒐集 (Private Guidance)",
                },
              ].map((pill, i) => (
                <FeatureCard
                  key={pill.title}
                  icon={pill.icon}
                  title={pill.title}
                  description={pill.desc}
                  delay={0.1 * i}
                  index={i}
                />
              ))}
            </div>

            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="p-8 border border-white/10 bg-white/2">
                <h4 className="text-[10px] uppercase tracking-widest text-emerald-400 mb-8 font-bold">
                  Architecture Layers
                </h4>
                <div className="space-y-4">
                  {[
                    "L7 互動層 (Interaction)",
                    "L6 控制層 (Agent Core)",
                    "L5 動態權重調整層",
                    "L4 推演層 (Simulation)",
                    "L3 預測層 (Predictive)",
                  ].map((layer, idx) => (
                    <div
                      key={layer}
                      className="flex items-center gap-4 text-xs py-2 border-b border-white/5 group cursor-default"
                    >
                      <span className="opacity-20 font-mono">0{7 - idx}</span>
                      <span className="font-bold tracking-tight group-hover:text-emerald-400 transition-colors uppercase">
                        {layer}
                      </span>
                    </div>
                  ))}
                  <div className="pt-4 text-[10px] font-bold text-white/30 uppercase tracking-widest underline italic cursor-pointer hover:text-white">
                    View Full Documentation
                  </div>
                </div>
              </div>
              <button className="w-full py-6 border border-white text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition-colors duration-500">
                Analyze Full Stack
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Verification */}
      <section className="py-32 px-6 bg-[#0a0a0b]" id="cases">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <div className="sticky top-32">
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-emerald-400 mb-8 font-bold border-l-2 border-emerald-500 pl-4">
                  Verification
                </h2>
                <h3 className="text-5xl font-black text-white tracking-tighter uppercase mb-10 leading-[0.9]">
                  2026 年度
                  <br />
                  實證應用 (Scenarios)
                </h3>
                <p className="text-slate-500 text-sm uppercase tracking-widest leading-relaxed mb-12 max-w-sm">
                  系統針對展覽與商場兩大場域進行情境模擬，驗證動態權重對局部熱點之紓解成效。
                </p>
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <p className="text-[10px] font-bold text-white/30 mb-2 uppercase">
                      松山文創
                    </p>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-4 bg-emerald-500" />
                      <div className="w-1 h-3 bg-white/20" />
                      <div className="w-1 h-5 bg-white/20" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/30 mb-2 uppercase">
                      三創生活
                    </p>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-2 bg-white/20" />
                      <div className="w-1 h-4 bg-emerald-500" />
                      <div className="w-1 h-3 bg-white/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <CaseStudy
                tags={["ACF FESTIVAL", "松山文創", "STAGE-A"]}
                title="大型展演場域引流"
                subtitle="High-Fluctuation Handling"
                content="預先辨識舞台聚集效應，利用柔性導航將人流分散。降低主通道阻塞率達40%。"
              />
              <CaseStudy
                tags={["POP-UP STORE", "三創生活", "SHOP-B"]}
                title="商場內排隊控制"
                subtitle="Queue Overflow Management"
                content="特定櫃位飽和時啟動跨樓層緩衝。輔助周邊店家營業坪效提升15%。"
              />
              <div className="p-8 border border-dashed border-white/10 text-center">
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
                  Load More Verifications
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics / Final Statement */}
      <section className="py-40 px-6 border-t border-white/10" id="metrics">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-16 font-mono">
            Performance Impact Report
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { label: "人流疏導效率", val: "35", unit: "%" },
              { label: "主通道阻塞率", val: "-60", unit: "%" },
              { label: "推薦方案接受度", val: "88", unit: "+" },
            ].map((m) => (
              <div key={m.label} className="group cursor-default">
                <div className="text-[10px] font-bold text-emerald-400 mb-6 uppercase tracking-widest">
                  {m.label}
                </div>
                <div className="text-8xl font-black text-white tracking-tighter mb-4 group-hover:scale-110 transition-transform duration-500">
                  {m.val}
                  <span className="text-2xl text-white/20 font-bold ml-1">
                    {m.unit}
                  </span>
                </div>
                <div className="h-0.5 w-12 bg-white/10 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer
        className="py-24 px-6 border-t border-white/10 bg-black relative"
        id="contact"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-end">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-emerald-500 flex items-center justify-center font-black text-black">
                SAFE
              </div>
              <span className="text-xl font-black uppercase tracking-tighter">
                DT-Crowd Guard
              </span>
            </div>
            <h3 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              Future Ready Framework:
              <br />
              <span className="text-white/30">Human-Centric Efficiency</span>
            </h3>
            <div className="flex gap-10 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-12">
              <span>Privacy First</span>
              <span>Dynamic Weights</span>
              <span>Digital Twin</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="REGISTRATION_EMAIL_V2.4"
                className="px-6 py-4 bg-white/5 border border-white/10 focus:border-emerald-500 focus:outline-none transition-colors w-full sm:w-80 text-xs font-mono"
              />
              <button className="px-10 py-4 bg-emerald-500 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
                REQUEST DEMO
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-16">
            <div className="text-right">
              <div className="writing-mode-vertical text-[10px] uppercase tracking-[0.4em] opacity-30 h-40">
                TAIPEI | SYNTREND | SONGSHAN
              </div>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-12 text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
              <div>Crowd Intelligence Systems Research</div>
              <div>© 2024-2026 AI Agent Privacy Framework</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
