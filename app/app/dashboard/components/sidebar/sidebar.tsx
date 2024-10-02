'use client'

import React, { useState } from 'react';
import { Settings, Activity, FileText, BarChart2, FolderPlus, BookOpen, Mail, ChevronDown, Search } from 'lucide-react';

type MenuItem = {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: number;
  submenu?: MenuItem[];
};

const menuItems: MenuItem[] = [
  { icon: <BarChart2 size={20} />, label: 'Dashboard', href: '/dashboard' },
  { icon: <Activity size={20} />, label: 'Activity', href: '/activity', badge: 10 },
  { icon: <FileText size={20} />, label: 'My tasks', href: '/tasks', badge: 8 },
  {
    icon: <BarChart2 size={20} />,
    label: 'Analytics',
    href: '/analytics',
    submenu: [
      { icon: <BarChart2 size={20} />, label: 'Overview', href: '/analytics/overview' },
      { icon: <BarChart2 size={20} />, label: 'Reports', href: '/analytics/reports' },
    ],
  },
  {
    icon: <FolderPlus size={20} />,
    label: 'Projects',
    href: '/projects',
    submenu: [
      { icon: <FolderPlus size={20} />, label: 'All Projects', href: '/projects/all' },
      { icon: <FolderPlus size={20} />, label: 'Add New', href: '/projects/new' },
    ],
  },
  {
    icon: <Settings size={20} />,
    label: 'Settings',
    href: '/settings',
    submenu: [
      { icon: <Settings size={20} />, label: 'General', href: '/settings/general' },
      { icon: <Settings size={20} />, label: 'Security', href: '/settings/security' },
    ],
  },
  { icon: <BookOpen size={20} />, label: 'Documentation', href: '/docs' },
];

const Sidebar: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(label)) {
        newSet.delete(label);
      } else {
        newSet.add(label);
      }
      return newSet;
    });
  };

  const renderMenuItem = (item: MenuItem) => {
    const isExpanded = expandedItems.has(item.label);

    return (
      <div key={item.label} className="mb-1">
        <a
          href={item.href}
          className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-md"
          onClick={(e) => item.submenu && (e.preventDefault(), toggleExpand(item.label))}
        >
          {item.icon}
          <span className="ml-3">{item.label}</span>
          {item.badge && (
            <span className="ml-auto bg-gray-600 text-xs font-semibold px-2 py-1 rounded-full">
              {item.badge}
            </span>
          )}
          {item.submenu && (
            <ChevronDown
              size={16}
              className={`ml-auto transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            />
          )}
        </a>
        {item.submenu && isExpanded && (
          <div className="ml-6 mt-1">
            {item.submenu.map((subItem) => renderMenuItem(subItem))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-72 h-screen bg-[#161618] text-white p-4 flex flex-col">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-green-400 rounded-full animate-spin"></div>
        <h1 className="ml-3 text-xl font-semibold">Untitled UI</h1>
      </div>
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-700 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <nav className="flex-grow overflow-y-auto">
        {menuItems.map(renderMenuItem)}
      </nav>
      <div className="mt-auto pt-4 border-t border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-500"></div>
          <div className="ml-3">
            <p className="text-sm font-medium">Mia de Silva</p>
            <p className="text-xs text-gray-400">mia@untitledui.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;