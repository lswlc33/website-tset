import React, { useState, useEffect, useMemo } from 'react';
import { Flame, Droplets, Wind, Sun, Moon, Users, ChevronDown, ChevronUp, Search, ArrowUpDown, ArrowUp, ArrowDown, Edit3, Trophy, LayoutGrid, List } from 'lucide-react';

const GuildDeepRegionTable = () => {
  // 默认示例文本
  const defaultInput = `公会成员深域进度：
绫七不是07：
公主骑士等级72
深域进度：火: 3-6/水: 2-4/风: 3-7/光: 3-5/暗: 3-10

镜像：
公主骑士等级62
深域进度：火: 1-1/水: 1-1/风: 1-1/光: 1-1/暗: 1-1

唔姆唔姆：
公主骑士等级49
深域进度：火: 1-1/水: 1-1/风: 1-1/光: 1-1/暗: 1-1

IKUN：
公主骑士等级84
深域进度：火: 4-9/水: 4-9/风: 4-9/光: 4-9/暗: 4-9

达利特：
公主骑士等级92
深域进度：火: 5-9/水: 4-9/风: 5-9/光: 4-9/暗: 4-9

百分之50的灰：
公主骑士等级64
深域进度：火: 4-9/水: 4-9/风: 4-5/光: 4-9/暗: 4-9

小镜华：
公主骑士等级58
深域进度：火: 4-3/水: 2-9/风: 3-9/光: 2-9/暗: 4-3

焖焖碳-：
公主骑士等级68
深域进度：火: 4-9/水: 4-9/风: 4-5/光: 4-9/暗: 4-9

Monica：
公主骑士等级60
深域进度：火: 3-10/水: 3-10/风: 3-10/光: 3-10/暗: 3-10

我要退出乐队：
公主骑士等级59
深域进度：火: 2-7/水: 1-10/风: 1-10/光: 1-10/暗: 1-10

水水：
公主骑士等级76
深域进度：火: 4-6/水: 1-9/风: 4-9/光: 4-6/暗: 4-9

偏爱星光：
公主骑士等级94
深域进度：火: 4-9/水: 4-9/风: 4-5/光: 4-9/暗: 4-9

NiFuChu：
公主骑士等级48
深域进度：火: 3-9/水: 3-9/风: 3-9/光: 3-9/暗: 3-9

银影：
公主骑士等级78
深域进度：火: 4-9/水: 4-9/风: 5-9/光: 4-9/暗: 4-9

真白白：
公主骑士等级100
深域进度：火: 5-2/水: 4-9/风: 4-9/光: 4-9/暗: 4-9

悠奈酱：
公主骑士等级76
深域进度：火: 4-9/水: 4-9/风: 4-9/光: 4-9/暗: 4-9

樱：
公主骑士等级67
深域进度：火: 3-10/水: 3-10/风: 3-10/光: 3-10/暗: 3-10

偏爱星光二号机：
公主骑士等级91
深域进度：火: 4-9/水: 4-9/风: 4-5/光: 4-9/暗: 4-9

偏爱星光三号机：
公主骑士等级94
深域进度：火: 4-9/水: 4-9/风: 4-5/光: 4-9/暗: 4-9

不起眼：
公主骑士等级66
深域进度：火: 3-9/水: 4-9/风: 4-9/光: 4-9/暗: 4-9

Hiroto：
公主骑士等级66
深域进度：火: 4-6/水: 4-1/风: 4-2/光: 3-10/暗: 3-10

心爱千叶：
公主骑士等级83
深域进度：火: 5-2/水: 4-9/风: 4-9/光: 4-9/暗: 4-9

白魔法师：
公主骑士等级71
深域进度：火: 4-9/水: 4-9/风: 4-9/光: 4-9/暗: 4-9

shangtouge：
公主骑士等级73
深域进度：火: 4-9/水: 4-9/风: 4-9/光: 4-9/暗: 4-9

琪露诺：
公主骑士等级59
深域进度：火: 1-3/水: 1-5/风: 1-5/光: 1-5/暗: 1-5

俯瞰风景：
公主骑士等级82
深域进度：火: 4-9/水: 4-9/风: 4-9/光: 4-9/暗: 4-9

菜汪（在挖勿t：
公主骑士等级68
深域进度：火: 4-9/水: 4-9/风: 4-9/光: 4-9/暗: 4-9

某路过的圣骑：
公主骑士等级59
深域进度：火: 4-6/水: 4-1/风: 4-2/光: 2-9/暗: 4-8

菲特泰斯泰罗莎：
公主骑士等级59
深域进度：火: 1-3/水: 1-5/风: 1-5/光: 1-5/暗: 1-9`;

  const [inputText, setInputText] = useState(defaultInput);
  const [parsedData, setParsedData] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // 排序状态: key 可以是 'level', 'totalProgressScore', 'fire', 'water' 等
  const [sortConfig, setSortConfig] = useState({ key: 'totalProgressScore', direction: 'desc' });

  // 解析逻辑 (保持不变)
  const parseData = (text) => {
    const blocks = text.trim().split(/\n\s*\n/);
    const members = [];

    blocks.forEach(block => {
      const lines = block.split('\n').map(l => l.trim()).filter(l => l);
      
      let name = "";
      let level = 0;
      let progressRaw = "";

      lines.forEach(line => {
        if (line.includes('公主骑士等级')) {
          const match = line.match(/公主骑士等级\s*(\d+)/);
          if (match) level = parseInt(match[1], 10);
        } else if (line.includes('深域进度')) {
          progressRaw = line.replace(/深域进度[：:]\s*/, '');
        } else if (line.endsWith('：') || line.endsWith(':')) {
           name = line.slice(0, -1);
        } else if (!name && !line.includes('公会成员深域进度')) {
           name = line;
        }
      });

      if (name && level) {
        const elementsData = {
          fire: { area: 0, node: 0, score: 0, label: '?' },
          water: { area: 0, node: 0, score: 0, label: '?' },
          wind: { area: 0, node: 0, score: 0, label: '?' },
          light: { area: 0, node: 0, score: 0, label: '?' },
          dark: { area: 0, node: 0, score: 0, label: '?' },
        };

        const parts = progressRaw.split('/');
        parts.forEach(part => {
          const [typeStr, valStr] = part.split(/[:：]\s*/);
          if (typeStr && valStr) {
            let key = '';
            if (typeStr.includes('火')) key = 'fire';
            if (typeStr.includes('水')) key = 'water';
            if (typeStr.includes('风')) key = 'wind';
            if (typeStr.includes('光')) key = 'light';
            if (typeStr.includes('暗')) key = 'dark';

            if (key) {
              const [area, node] = valStr.split(/[-]/).map(n => parseInt(n, 10));
              const safeArea = area || 0;
              const safeNode = node || 0;
              elementsData[key] = {
                area: safeArea,
                node: safeNode,
                score: safeArea * 100 + safeNode, // 用于排序的具体分数
                label: valStr
              };
            }
          }
        });

        const totalProgressScore = Object.values(elementsData).reduce((acc, curr) => acc + curr.score, 0);

        members.push({
          id: Math.random().toString(36).substr(2, 9),
          name,
          level,
          elements: elementsData,
          totalProgressScore
        });
      }
    });

    return members;
  };

  useEffect(() => {
    setParsedData(parseData(inputText));
  }, [inputText]);

  // 处理排序点击
  const handleSort = (key) => {
    let direction = 'desc';
    if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    setSortConfig({ key, direction });
  };
  
  // 移动端专用排序处理器 (下拉菜单)
  const handleMobileSortChange = (e) => {
    const value = e.target.value;
    // 下拉菜单直接选择 "key" 默认降序，如果用户想升序，可以再点一下（虽然手机端UI通常只给最常用的降序）
    setSortConfig({ key: value, direction: 'desc' });
  };

  // 核心数据处理：过滤 -> 排序
  const processedData = useMemo(() => {
    let data = [...parsedData];

    // 1. 过滤
    if (searchTerm) {
      data = data.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // 2. 排序
    data.sort((a, b) => {
      let valA, valB;

      // 提取比较值
      if (['fire', 'water', 'wind', 'light', 'dark'].includes(sortConfig.key)) {
        valA = a.elements[sortConfig.key].score;
        valB = b.elements[sortConfig.key].score;
      } else {
        valA = a[sortConfig.key];
        valB = b[sortConfig.key];
      }

      if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
      if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return data;
  }, [parsedData, searchTerm, sortConfig]);

  // 样式配置
  const columns = [
    { key: 'rank', label: '排名', icon: null, sortable: false, width: 'w-16' },
    { key: 'name', label: '昵称', icon: null, sortable: false, width: 'w-48' }, 
    { key: 'level', label: '骑士等级', icon: Trophy, sortable: true, width: 'w-28' },
    { key: 'totalProgressScore', label: '总进度', icon: BarChart3Icon, sortable: true, width: 'w-28' },
    { key: 'fire', label: '火', icon: Flame, color: 'text-red-500', bgBase: 'red', sortable: true, width: 'w-24' },
    { key: 'water', label: '水', icon: Droplets, color: 'text-blue-500', bgBase: 'blue', sortable: true, width: 'w-24' },
    { key: 'wind', label: '风', icon: Wind, color: 'text-green-500', bgBase: 'green', sortable: true, width: 'w-24' },
    { key: 'light', label: '光', icon: Sun, color: 'text-yellow-500', bgBase: 'yellow', sortable: true, width: 'w-24' },
    { key: 'dark', label: '暗', icon: Moon, color: 'text-purple-500', bgBase: 'purple', sortable: true, width: 'w-24' },
  ];

  function BarChart3Icon(props) {
      return <Trophy {...props} />; 
  }

  // 动态背景色生成器 (热力图效果)
  const getCellBackground = (area, baseColor) => {
    const intensityMap = {
      0: 'bg-slate-50',
      1: `bg-${baseColor}-50`,
      2: `bg-${baseColor}-100`,
      3: `bg-${baseColor}-200`,
      4: `bg-${baseColor}-300`,
      5: `bg-${baseColor}-400`,
      6: `bg-${baseColor}-500`,
    };
    const cappedArea = Math.min(Math.max(area, 0), 6);
    return intensityMap[cappedArea] || 'bg-slate-50';
  };
  
  const getCellTextColor = (area, baseColor) => {
      if (area >= 5) return 'text-white font-bold';
      if (area >= 3) return `text-${baseColor}-900 font-medium`;
      return 'text-slate-600';
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* 顶部控制栏 */}
      <header className="bg-white shadow-sm sticky top-0 z-30 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg text-white shadow-lg shadow-indigo-200">
                <Users size={20} />
              </div>
              <h1 className="text-xl font-bold text-slate-800">
                公会深域统计
              </h1>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              {/* 移动端排序选择器 (MD以下显示) */}
              <div className="md:hidden w-full relative">
                 <select 
                   className="w-full appearance-none bg-white border border-slate-200 text-slate-700 py-2 pl-3 pr-8 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                   value={sortConfig.key}
                   onChange={handleMobileSortChange}
                 >
                   <option value="totalProgressScore">排序: 总进度 (默认)</option>
                   <option value="level">排序: 骑士等级</option>
                   <option value="fire">排序: 火属性</option>
                   <option value="water">排序: 水属性</option>
                   <option value="wind">排序: 风属性</option>
                   <option value="light">排序: 光属性</option>
                   <option value="dark">排序: 暗属性</option>
                 </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                    <ArrowUpDown size={14} />
                 </div>
              </div>

              {/* 搜索框 */}
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  placeholder="搜索成员..." 
                  className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <button 
                onClick={() => setShowInput(!showInput)}
                className={`px-3 py-2 rounded-lg border flex justify-center items-center gap-2 text-sm font-medium transition-colors ${showInput ? 'bg-slate-100 border-slate-300 text-slate-700' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              >
                <Edit3 size={16} />
                <span className="md:inline">数据源</span>
              </button>
            </div>
          </div>

          {/* 折叠的输入框 */}
          {showInput && (
            <div className="p-4 bg-slate-100 rounded-lg border border-slate-200 animate-in slide-in-from-top-2">
              <textarea
                className="w-full h-48 p-3 border border-slate-300 rounded-md font-mono text-xs focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
               <div className="mt-2 text-right">
                <button 
                  onClick={() => setInputText(defaultInput)}
                  className="text-xs text-indigo-600 hover:underline"
                >
                  重置为示例数据
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-2 md:px-4 py-4 md:py-6">
        {/* 数据概览条 */}
        <div className="mb-4 flex flex-wrap gap-4 text-sm text-slate-500 px-1">
            <span>总人数: <strong className="text-slate-700">{processedData.length}</strong></span>
            <span>平均等级: <strong className="text-slate-700">{parsedData.length > 0 ? (parsedData.reduce((acc, cur) => acc + cur.level, 0) / parsedData.length).toFixed(1) : 0}</strong></span>
            <span className="md:hidden text-indigo-600 text-xs ml-auto self-center">当前排序: {columns.find(c => c.key === sortConfig.key)?.label || '总进度'}</span>
        </div>

        {/* 桌面端视图: 传统表格 (MD及以上显示) */}
        <div className="hidden md:block bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {columns.map((col) => {
                    const Icon = col.icon;
                    const isActive = sortConfig.key === col.key;
                    return (
                      <th 
                        key={col.key} 
                        className={`px-4 py-3 ${col.width} ${col.sortable ? 'cursor-pointer hover:bg-slate-100 select-none' : ''} transition-colors`}
                        onClick={() => col.sortable && handleSort(col.key)}
                      >
                        <div className={`flex items-center gap-1.5 ${col.color || 'text-slate-600'}`}>
                          {Icon && <Icon size={14} />}
                          <span>{col.label}</span>
                          {col.sortable && (
                            <div className="flex flex-col ml-auto">
                                {isActive && sortConfig.direction === 'asc' && <ArrowUp size={10} className="text-indigo-600" />}
                                {isActive && sortConfig.direction === 'desc' && <ArrowDown size={10} className="text-indigo-600" />}
                                {!isActive && <ArrowUpDown size={10} className="text-slate-300" />}
                            </div>
                          )}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {processedData.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length} className="px-6 py-12 text-center text-slate-400">
                      未找到匹配成员
                    </td>
                  </tr>
                ) : (
                  processedData.map((member, index) => (
                    <tr key={member.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-4 py-3 text-slate-400 font-mono text-xs">{index + 1}</td>
                      <td className="px-4 py-3">
                        <div className="font-medium text-slate-700 group-hover:text-indigo-700 truncate max-w-[12rem]">{member.name}</div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">
                          Lv.{member.level}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-slate-500">
                         <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                           <div className="bg-indigo-500 h-full" style={{ width: `${Math.min(member.totalProgressScore / 2500 * 100, 100)}%` }}></div>
                         </div>
                      </td>
                      {['fire', 'water', 'wind', 'light', 'dark'].map(eleKey => {
                         const eleData = member.elements[eleKey];
                         const colDef = columns.find(c => c.key === eleKey);
                         const bgClass = getCellBackground(eleData.area, colDef.bgBase);
                         const textClass = getCellTextColor(eleData.area, colDef.bgBase);
                         return (
                           <td key={eleKey} className="px-2 py-2">
                             <div className={`flex items-center justify-center h-8 rounded-md ${bgClass} ${textClass} font-mono text-sm`}>
                               {eleData.label}
                             </div>
                           </td>
                         );
                      })}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* 移动端视图: 卡片列表 (MD以下显示) */}
        <div className="md:hidden space-y-3">
          {processedData.length === 0 ? (
            <div className="text-center py-12 text-slate-400 bg-white rounded-lg border border-slate-200">
               未找到匹配成员
            </div>
          ) : (
            processedData.map((member, index) => (
              <div key={member.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                {/* 卡片头部信息 */}
                <div className="flex justify-between items-start mb-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded bg-slate-100 text-xs font-mono text-slate-500">
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <div className="font-bold text-slate-800 truncate text-base">{member.name}</div>
                      <div className="text-xs text-slate-400 mt-0.5">综合评分: {member.totalProgressScore}</div>
                    </div>
                  </div>
                  <span className="flex-shrink-0 px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded border border-indigo-100">
                    Lv.{member.level}
                  </span>
                </div>

                {/* 属性进度网格 - 手机端横向排布 */}
                <div className="grid grid-cols-5 gap-1.5">
                  {['fire', 'water', 'wind', 'light', 'dark'].map(eleKey => {
                    const eleData = member.elements[eleKey];
                    const colDef = columns.find(c => c.key === eleKey);
                    const bgClass = getCellBackground(eleData.area, colDef.bgBase);
                    const textClass = getCellTextColor(eleData.area, colDef.bgBase);
                    const Icon = colDef.icon;

                    return (
                      <div key={eleKey} className="flex flex-col gap-1">
                        {/* 属性图标(可选，为了节省空间可以只用颜色，但图标更直观) */}
                        <div className="flex justify-center">
                          <Icon size={12} className={`${colDef.color} opacity-70`} />
                        </div>
                        {/* 进度块 */}
                        <div className={`
                          flex items-center justify-center h-8 rounded 
                          ${bgClass} ${textClass}
                          font-mono text-xs shadow-sm
                        `}>
                          {eleData.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="mt-4 text-center text-xs text-slate-400 pb-8">
           {processedData.length} 位成员 · 更新时间: {new Date().toLocaleDateString()}
        </div>
      </main>
    </div>
  );
};

export default GuildDeepRegionTable;
