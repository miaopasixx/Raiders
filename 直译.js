function createUltimateUserSimulator() {
    // 检查是否已存在，避免重复创建
    const existing = document.getElementById('ultimate-user-simulator');
    if (existing) {
        existing.remove();
    }

    // 创建浮动窗口 - 精致设计
    const simulator = document.createElement('div');
    simulator.id = 'ultimate-user-simulator';
    simulator.style.cssText = `
        position: fixed;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        width: min(480px, 90vw);
        height: min(75vh, 750px);
        background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
        border: none;
        border-radius: 16px;
        box-shadow: 
            0 20px 40px -8px rgba(0, 0, 0, 0.15),
            0 8px 25px -5px rgba(0, 0, 0, 0.08);
        z-index: 999999;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        resize: both;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        isolation: isolate;
        user-select: none;
        min-width: 320px;
    `;
    
    // 创建紧凑型标题栏
    const header = document.createElement('div');
    header.style.cssText = `
        padding: 16px 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-bottom: 4px solid rgba(255, 255, 255, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        cursor: move;
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.3px;
        position: relative;
        overflow: hidden;
    `;
    
    // 标题栏内容
    header.innerHTML = `
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%); transform: translateX(-100%); animation: shimmer 3s infinite;"></div>
        <span style="position: relative; z-index: 2; display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 16px;">☀️</span>
            <span>小太阳图文助手</span>
            <span style="font-size: 10px; background: rgba(255,255,255,0.2); padding: 3px 8px; border-radius: 10px; font-weight: 500;">精致版</span>
        </span>
        <div style="display: flex; gap: 6px; position: relative; z-index: 2;">
            <button id="minimize-ultimate-simulator" style="
                background: rgba(255,255,255,0.15); 
                border: none; 
                cursor: pointer; 
                font-size: 14px; 
                color: white; 
                border-radius: 6px; 
                width: 28px; 
                height: 28px; 
                display: flex; 
                align-items: center; 
                justify-content: center;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                backdrop-filter: blur(8px);
                font-weight: 600;
            ">−</button>
            <button id="close-ultimate-simulator" style="
                background: rgba(255,255,255,0.15); 
                border: none; 
                cursor: pointer; 
                font-size: 14px; 
                color: white; 
                border-radius: 6px; 
                width: 28px; 
                height: 28px; 
                display: flex; 
                align-items: center; 
                justify-content: center;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                backdrop-filter: blur(8px);
                font-weight: 600;
            ">×</button>
        </div>
    `;
    simulator.appendChild(header);
    
    // 创建紧凑型主内容区域
    const content = document.createElement('div');
    content.id = 'ultimate-content-area';
    content.style.cssText = `
        height: calc(100% - 64px);
        overflow: hidden;
        background: transparent;
        display: flex;
        flex-direction: column;
    `;
    
    // 页签架构内容 - 精致样式
    content.innerHTML = `
        <style>
            /* 核心动画定义 */
            @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(200%); }
            }
            
            @keyframes slideInRightUltimate {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes slideOutRightUltimate {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
            
            @keyframes bounceIn {
                0% { transform: scale(0.5); opacity: 0; }
                50% { transform: scale(1.02); }
                100% { transform: scale(1); opacity: 1; }
            }
            
            @keyframes slideUp {
                from { transform: translateY(10px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideDown {
                from { transform: translateY(-6px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
            
            /* 页签样式 - 精致版 */
            #ultimate-user-simulator .ultimate-tabs-container {
                padding: 0 20px 0 20px;
                background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            }
            
            #ultimate-user-simulator .ultimate-tabs-nav {
                display: flex;
                gap: 1px;
                padding-top: 12px;
            }
            
            #ultimate-user-simulator .ultimate-tab-button {
                padding: 10px 16px;
                background: transparent;
                border: none;
                border-radius: 10px 10px 0 0;
                cursor: pointer;
                font-weight: 600;
                font-size: 12px;
                color: #64748b;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                letter-spacing: 0.2px;
                display: flex;
                align-items: center;
                gap: 6px;
                border-bottom: 2px solid transparent;
            }
            
            #ultimate-user-simulator .ultimate-tab-button:hover {
                background: rgba(255, 255, 255, 0.6);
                color: #475569;
                transform: translateY(-1px);
            }
            
            #ultimate-user-simulator .ultimate-tab-button.active {
                background: white;
                color: #1e293b;
                border-bottom: 2px solid #3b82f6;
                box-shadow: 0 4px 12px rgba(0, 130, 246, 0.1), 0 -1px 4px rgba(0, 0, 0, 0.03);
            }
            
            #ultimate-user-simulator .ultimate-tab-icon {
                font-size: 13px;
            }
            
            #ultimate-user-simulator .ultimate-tab-content {
                overflow-y: auto;
                overflow-x: hidden;
                padding: 8px;
                background: white;
                scroll-behavior: smooth;
                border-bottom-left-radius: 16px;
                border-bottom-right-radius: 16px;
            }
            
            #ultimate-user-simulator .ultimate-tab-content::-webkit-scrollbar {
                width: 6px;
            }
            
            #ultimate-user-simulator .ultimate-tab-content::-webkit-scrollbar-track {
                background: rgba(0,0,0,0.03);
                border-radius: 3px;
            }
            
            #ultimate-user-simulator .ultimate-tab-content::-webkit-scrollbar-thumb {
                background: linear-gradient(135deg, #667eea, #764ba2);
                border-radius: 3px;
            }
            
            #ultimate-user-simulator .ultimate-tab-content::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(135deg, #5a67d8, #6b46c1);
            }
            
            #ultimate-user-simulator .ultimate-tab-panel {
                display: none;
                animation: fadeIn 0.3s ease-out;
            }
            
            #ultimate-user-simulator .ultimate-tab-panel.active {
                display: block;
            }
            
            /* 卡片组件样式 - 精致版 */
            #ultimate-user-simulator .ultimate-glass-card {
                background: rgba(255, 255, 255, 0.95);
                border-radius: 12px;
                padding: 16px;
                margin-bottom: 14px;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                animation: slideUp 0.4s ease-out;
            }
            
            #ultimate-user-simulator .ultimate-glass-card:hover {
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
                transform: translateY(-1px);
            }
            
            #ultimate-user-simulator .ultimate-card-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 14px;
                padding-bottom: 12px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            }
            
            #ultimate-user-simulator .ultimate-collapsible-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                user-select: none;
                transition: all 0.2s ease;
                padding: 2px 0;
                border-radius: 8px;
            }
            
            #ultimate-user-simulator .ultimate-collapsible-header:hover {
                background: rgba(59, 130, 246, 0.04);
                padding: 2px 8px;
            }
            
            #ultimate-user-simulator .ultimate-collapse-toggle {
                background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                color: white;
                border: none;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                cursor: pointer;
                font-size: 11px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
                font-weight: 600;
            }
            
            #ultimate-user-simulator .ultimate-collapse-toggle:hover {
                transform: scale(1.05) rotate(180deg);
                box-shadow: 0 3px 12px rgba(59, 130, 246, 0.3);
            }
            
            #ultimate-user-simulator .ultimate-collapsible-content {
                max-height: 0;
                overflow: hidden;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                opacity: 0;
            }
            
            #ultimate-user-simulator .ultimate-collapsible-content.expanded {
                max-height: 300px;
                opacity: 1;
                margin-top: 12px;
                animation: slideDown 0.3s ease-out;
            }
            
            /* 表单组件样式 - 精致版 */
            #ultimate-user-simulator .ultimate-grid-2-2 {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 12px;
            }
            
            #ultimate-user-simulator .ultimate-input-group {
                display: flex;
                flex-direction: column;
                gap: 6px;
            }
            
            #ultimate-user-simulator .ultimate-input-label {
                font-size: 11px;
                font-weight: 600;
                color: #374151;
                letter-spacing: 0.2px;
            }
            
            #ultimate-user-simulator .ultimate-select-modern {
                width: 100%;
                padding: 8px 12px;
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.95);
                font-size: 11px;
                font-weight: 500;
                color: #374151;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                outline: none;
                cursor: pointer;
            }
            
            #ultimate-user-simulator .ultimate-select-modern:focus {
                border-color: #3b82f6;
                box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
                background: #ffffff;
            }
            
            #ultimate-user-simulator .ultimate-select-modern:hover {
                border-color: #d1d5db;
            }
            
            /* 特性列表样式 - 精致版 */
            #ultimate-user-simulator .ultimate-feature-list {
                margin-top: 12px;
                display: flex;
                flex-direction: column;
                gap: 6px;
            }
            
            #ultimate-user-simulator .ultimate-feature-item {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 11px;
                color: #64748b;
                line-height: 1.4;
                padding: 4px 0;
            }
            
            #ultimate-user-simulator .ultimate-feature-icon {
                font-size: 12px;
                min-width: 16px;
            }
            
            #ultimate-user-simulator .ultimate-feature-text {
                font-weight: 500;
            }
            
            /* 编辑器控制样式 - 精致版 */
            #ultimate-user-simulator .ultimate-editor-controls {
                display: flex;
                gap: 10px;
                align-items: center;
                flex-wrap: wrap;
            }
            
            #ultimate-user-simulator .ultimate-count-badge {
                background: linear-gradient(135deg, #dbeafe, #bfdbfe);
                color: #1e40af;
                padding: 6px 12px;
                border-radius: 16px;
                font-size: 11px;
                font-weight: 600;
                letter-spacing: 0.3px;
                box-shadow: 0 2px 8px rgba(30, 64, 175, 0.15);
            }
            
            /* 内容编辑器样式 - 精致版 */
            #ultimate-user-simulator .ultimate-content-editor {
                max-height: 300px;
                overflow-y: auto;
                border: 1px solid #f1f5f9;
                border-radius: 10px;
                background: #fafbfc;
                transition: all 0.2s ease;
            }
            
            #ultimate-user-simulator .ultimate-content-editor::-webkit-scrollbar {
                width: 6px;
            }
            
            #ultimate-user-simulator .ultimate-content-editor::-webkit-scrollbar-track {
                background: transparent;
            }
            
            #ultimate-user-simulator .ultimate-content-editor::-webkit-scrollbar-thumb {
                background: #cbd5e1;
                border-radius: 3px;
            }
            
            #ultimate-user-simulator .ultimate-empty-state {
                text-align: center;
                color: #9ca3af;
                padding: 86px 16px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
            }
            
            #ultimate-user-simulator .ultimate-empty-icon {
                font-size: 32px;
                opacity: 0.6;
            }
            
            #ultimate-user-simulator .ultimate-empty-text {
                font-size: 14px;
                font-weight: 600;
                color: #6b7280;
            }
            
            #ultimate-user-simulator .ultimate-empty-hint {
                font-size: 11px;
                color: #9ca3af;
            }
            
            /* 工具栏样式 - 精致版 */
            #ultimate-user-simulator .ultimate-editor-toolbar {
                margin-top: 12px;
                padding: 12px;
                background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
                border-radius: 10px;
                display: none;
                animation: slideUp 0.3s ease-out;
            }
            
            #ultimate-user-simulator .ultimate-toolbar-section {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
            }
            
            #ultimate-user-simulator .ultimate-toolbar-info {
                background: rgba(255, 255, 255, 0.9);
                padding: 8px 12px;
                border-radius: 8px;
                margin-top: 8px;
                font-size: 10px;
                color: #6b7280;
                text-align: center;
            }
            
            /* 新增代码开始 - 从指定序号继续发送的样式 */
            #ultimate-user-simulator .ultimate-continue-from-controls {
                display: none;
                gap: 8px;
                margin: 10px 0;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                background: rgba(59, 130, 246, 0.05);
                padding: 12px;
                border-radius: 10px;
                border: 1px solid rgba(59, 130, 246, 0.1);
            }
            
            #ultimate-user-simulator .ultimate-continue-label {
                font-size: 11px;
                font-weight: 600;
                color: #475569;
                letter-spacing: 0.2px;
            }
            
            #ultimate-user-simulator .ultimate-continue-select {
                padding: 6px 12px;
                border: 1px solid rgba(59, 130, 246, 0.2);
                border-radius: 8px;
                background: white;
                font-size: 11px;
                font-weight: 500;
                color: #1e293b;
                cursor: pointer;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                min-width: 120px;
            }
            
            #ultimate-user-simulator .ultimate-continue-select:hover {
                border-color: #3b82f6;
                box-shadow: 0 2px 8px rgba(59, 130, 246, 0.15);
            }
            
            #ultimate-user-simulator .ultimate-continue-select:focus {
                outline: none;
                border-color: #3b82f6;
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
            }
            /* 新增代码结束 */

            /* 按钮组件样式 - 精致版 */
            #ultimate-user-simulator .ultimate-btn-tool {
                padding: 6px 12px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 11px;
                font-weight: 600;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                color: white;
                letter-spacing: 0.2px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            }
            
            #ultimate-user-simulator .ultimate-btn-purple { 
                background: linear-gradient(135deg, #8b5cf6, #7c3aed); 
                box-shadow: 0 2px 8px rgba(139, 92, 246, 0.2);
            }
            #ultimate-user-simulator .ultimate-btn-cyan { 
                background: linear-gradient(135deg, #06b6d4, #0891b2); 
                box-shadow: 0 2px 8px rgba(6, 182, 212, 0.2);
            }
            #ultimate-user-simulator .ultimate-btn-green { 
                background: linear-gradient(135deg, #10b981, #059669); 
                box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
            }
            #ultimate-user-simulator .ultimate-btn-red { 
                background: linear-gradient(135deg, #ef4444, #dc2626); 
                box-shadow: 0 2px 8px rgba(239, 68, 68, 0.2);
            }
            
            #ultimate-user-simulator .ultimate-btn-tool:hover {
                transform: translateY(-1px) scale(1.02);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            }
            
            #ultimate-user-simulator .ultimate-action-buttons {
                display: flex;
                gap: 12px;
                margin: 16px 0;
                justify-content: center;
            }
            
            #ultimate-user-simulator .ultimate-sending-controls {
                display: none;
                gap: 8px;
                margin: 16px 0;
                justify-content: center;
                flex-wrap: wrap;
            }

            #ultimate-user-simulator .ultimate-btn-primary,
            #ultimate-user-simulator .ultimate-btn-warning,
            #ultimate-user-simulator .ultimate-btn-success,
            #ultimate-user-simulator .ultimate-btn-danger {
                padding: 10px 20px;
                border: none;
                border-radius: 10px;
                cursor: pointer;
                font-weight: 600;
                font-size: 12px;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                letter-spacing: 0.3px;
                color: white;
                box-shadow: 0 3px 12px rgba(0, 0, 0, 0.12);
                min-width: 100px;
            }
            
            #ultimate-user-simulator .ultimate-btn-primary {
                background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                box-shadow: 0 3px 12px rgba(59, 130, 246, 0.25);
            }
            
            #ultimate-user-simulator .ultimate-btn-warning {
                background: linear-gradient(135deg, #f59e0b, #d97706);
                box-shadow: 0 3px 12px rgba(245, 158, 11, 0.25);
            }
            
            #ultimate-user-simulator .ultimate-btn-success {
                background: linear-gradient(135deg, #10b981, #059669);
                box-shadow: 0 3px 12px rgba(16, 185, 129, 0.25);
            }
            
            #ultimate-user-simulator .ultimate-btn-danger {
                background: linear-gradient(135deg, #ef4444, #dc2626);
                box-shadow: 0 3px 12px rgba(239, 68, 68, 0.25);
            }
            
            #ultimate-user-simulator .ultimate-btn-primary:hover:not(:disabled),
            #ultimate-user-simulator .ultimate-btn-warning:hover:not(:disabled),
            #ultimate-user-simulator .ultimate-btn-success:hover:not(:disabled),
            #ultimate-user-simulator .ultimate-btn-danger:hover:not(:disabled) {
                transform: translateY(-2px) scale(1.02);
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
            }
            
            #ultimate-user-simulator .ultimate-btn-primary:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                background: linear-gradient(135deg, #9ca3af, #6b7280);
                transform: none !important;
                box-shadow: 0 2px 6px rgba(156, 163, 175, 0.2);
            }
            
            #ultimate-user-simulator .ultimate-btn-secondary {
                padding: 8px 16px;
                background: linear-gradient(135deg, #f59e0b, #d97706);
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                font-size: 11px;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                align-items: center;
                gap: 4px;
                letter-spacing: 0.2px;
                box-shadow: 0 2px 8px rgba(245, 158, 11, 0.2);
            }
            
            #ultimate-user-simulator .ultimate-btn-secondary:hover {
                transform: translateY(-1px) scale(1.02);
                box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
            }
            
            #ultimate-user-simulator .ultimate-btn-secondary.edit-mode-active {
                background: linear-gradient(135deg, #ef4444, #dc2626);
                box-shadow: 0 2px 8px rgba(239, 68, 68, 0.2);
            }
            
            #ultimate-user-simulator .ultimate-btn-icon {
                font-size: 13px;
            }
            
            /* 内容项样式 - 精致版 */
            #ultimate-user-simulator .ultimate-content-item {
                position: relative;
                margin-bottom: 10px;
                padding: 12px;
                border-radius: 10px;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                animation: slideUp 0.4s ease-out;
                cursor: pointer;
            }
            
            #ultimate-user-simulator .ultimate-content-item:hover {
                transform: translateY(-1px);
                box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
            }
            
            #ultimate-user-simulator .ultimate-content-item.selected {
                box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
                background: rgba(59, 130, 246, 0.05);
                transform: translateY(-1px);
            }
            
            #ultimate-user-simulator .ultimate-text-item {
                background: linear-gradient(135deg, #eff6ff, #dbeafe);
                border-left: 3px solid #3b82f6;
            }
            
            #ultimate-user-simulator .ultimate-image-item {
                background: linear-gradient(135deg, #f0fdf4, #dcfce7);
                border-left: 3px solid #10b981;
            }
            
            /* 新增代码开始 - 同时发送组的样式 */
            #ultimate-user-simulator .ultimate-content-item.send-with-next {
                border-bottom: 3px dashed #f59e0b;
                margin-bottom: 2px;
            }
            
            #ultimate-user-simulator .ultimate-content-item.send-with-next::after {
                content: "🔗 与下一项同时发送";
                position: absolute;
                bottom: -2px;
                right: 8px;
                background: linear-gradient(135deg, #f59e0b, #d97706);
                color: white;
                font-size: 9px;
                font-weight: 600;
                padding: 2px 6px;
                border-radius: 4px;
                letter-spacing: 0.1px;
            }
            
            #ultimate-user-simulator .ultimate-content-item.in-send-group {
                border-left-color: #f59e0b;
            }
            
            #ultimate-user-simulator .ultimate-text-item.in-send-group {
                background: linear-gradient(135deg, #fef3c7, #fde68a);
            }
            
            #ultimate-user-simulator .ultimate-image-item.in-send-group {
                background: linear-gradient(135deg, #fef3c7, #fde68a);
            }
            /* 新增代码结束 */
            
            #ultimate-user-simulator .ultimate-item-header {
                font-size: 10px;
                font-weight: 700;
                margin-bottom: 8px;
                letter-spacing: 0.3px;
                text-transform: uppercase;
            }
            
            #ultimate-user-simulator .ultimate-text-preview {
                font-size: 12px;
                line-height: 1.5;
                color: #1e293b;
                word-break: break-word;
            }
            
            #ultimate-user-simulator .ultimate-image-preview {
                max-width: 100%;
                height: auto;
                border-radius: 8px;
                box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
            }
            
            #ultimate-user-simulator .ultimate-drag-handle {
                position: absolute;
                left: -10px;
                top: 50%;
                transform: translateY(-50%);
                cursor: grab;
                background: #6b7280;
                color: white;
                width: 20px;
                height: 28px;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 10px;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
                font-weight: 600;
            }
            
            #ultimate-user-simulator .ultimate-drag-handle:hover {
                background: #4b5563;
                cursor: grabbing;
                transform: translateY(-50%) scale(1.05);
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            }
            
            #ultimate-user-simulator .ultimate-delete-btn,
            #ultimate-user-simulator .ultimate-edit-btn {
                position: absolute;
                top: -8px;
                background: #ef4444;
                color: white;
                border: none;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                cursor: pointer;
                font-size: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 3px 12px rgba(239, 68, 68, 0.3);
                font-weight: 600;
            }
            
            #ultimate-user-simulator .ultimate-delete-btn {
                right: -10px;
            }
            
            #ultimate-user-simulator .ultimate-edit-btn {
                right: 14px;
                background: #3b82f6;
                box-shadow: 0 3px 12px rgba(59, 130, 246, 0.3);
            }
            
            /* 新增代码开始 - 同时发送按钮样式 */
            #ultimate-user-simulator .ultimate-send-with-btn {
                position: absolute;
                top: -8px;
                right: 38px;
                background: #f59e0b;
                color: white;
                border: none;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                cursor: pointer;
                font-size: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 3px 12px rgba(245, 158, 11, 0.3);
                font-weight: 600;
            }
            
            #ultimate-user-simulator .ultimate-send-with-btn:hover {
                background: #d97706;
                transform: scale(1.1);
                box-shadow: 0 4px 16px rgba(245, 158, 11, 0.4);
            }
            
            #ultimate-user-simulator .ultimate-send-with-btn.active {
                background: #059669;
                box-shadow: 0 3px 12px rgba(5, 150, 105, 0.3);
            }
            
            #ultimate-user-simulator .ultimate-send-with-btn.active:hover {
                background: #047857;
                box-shadow: 0 4px 16px rgba(5, 150, 105, 0.4);
            }
            /* 新增代码结束 */
            
            #ultimate-user-simulator .ultimate-delete-btn:hover {
                background: #dc2626;
                transform: scale(1.1);
                box-shadow: 0 4px 16px rgba(239, 68, 68, 0.4);
            }
            
            #ultimate-user-simulator .ultimate-edit-btn:hover {
                background: #1d4ed8;
                transform: scale(1.1);
                box-shadow: 0 4px 16px rgba(59, 130, 246, 0.4);
            }
            
            /* 按钮悬停效果 */
            #minimize-ultimate-simulator:hover,
            #close-ultimate-simulator:hover {
                background: rgba(255, 255, 255, 0.25) !important;
                transform: scale(1.05);
                box-shadow: 0 2px 8px rgba(255, 255, 255, 0.2);
            }
            
            /* 粘贴区域焦点效果 */
            #ultimate-paste-area:focus {
                border-color: #3b82f6 !important;
                background: linear-gradient(145deg, #eff6ff 0%, #dbeafe 100%) !important;
                box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1) !important;
                transform: scale(1.01);
            }
            
            /* 文本编辑模态框样式 - 精致版 */
            #ultimate-user-simulator .ultimate-text-edit-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000000;
                backdrop-filter: blur(6px);
                animation: fadeIn 0.2s ease-out;
            }
            
            #ultimate-user-simulator .ultimate-text-edit-content {
                background: white;
                border-radius: 16px;
                padding: 20px;
                max-width: 500px;
                width: 85vw;
                max-height: 70vh;
                overflow-y: auto;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
                animation: bounceIn 0.4s ease-out;
                position: relative;
            }
            
            #ultimate-user-simulator .ultimate-text-edit-textarea {
                width: 100%;
                min-height: 150px;
                padding: 16px;
                border: 2px solid #e5e7eb;
                border-radius: 10px;
                font-size: 13px;
                line-height: 1.5;
                resize: vertical;
                outline: none;
                font-family: inherit;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                background: rgba(255, 255, 255, 0.9);
            }
            
            #ultimate-user-simulator .ultimate-text-edit-textarea:focus {
                border-color: #3b82f6;
                box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
                background: #ffffff;
            }
            
            #ultimate-user-simulator .ultimate-text-edit-buttons {
                display: flex;
                gap: 10px;
                justify-content: flex-end;
                margin-top: 16px;
            }
            
            /* 最小化状态 - 保持完整胶囊形状，只显示标题栏 */
            #ultimate-user-simulator.minimized {
                border-radius: 16px !important;
                width: 320px !important;
                height: 64px !important;
                overflow: hidden;
            }
            
            #ultimate-user-simulator.minimized .ultimate-tab-content {
                border-bottom-left-radius: 16px !important;
                border-bottom-right-radius: 16px !important;
            }
            
            /* 响应式设计 - 精致版 */
            @media (max-width: 768px) {
                #ultimate-user-simulator {
                    width: 95vw !important;
                    height: 90vh !important;
                    top: 5vh !important;
                    left: 2.5vw !important;
                    transform: none !important;
                    border-radius: 12px !important;
                }
                
                #ultimate-user-simulator .ultimate-grid-2-2 {
                    grid-template-columns: 1fr !important;
                }
                
                #ultimate-user-simulator .ultimate-action-buttons {
                    flex-direction: column !important;
                }
                
                #ultimate-user-simulator .ultimate-editor-controls {
                    flex-direction: column !important;
                    align-items: flex-start !important;
                }
                
                #ultimate-user-simulator .ultimate-toolbar-section {
                    flex-direction: column !important;
                    width: 100%;
                }
                
                #ultimate-user-simulator .ultimate-btn-tool {
                    width: 100%;
                    justify-content: center;
                }
                
                #ultimate-user-simulator .ultimate-sending-controls {
                    flex-direction: column !important;
                }

                /* 新增代码开始 - 响应式设计支持 */
                #ultimate-user-simulator .ultimate-continue-from-controls {
                    flex-direction: column !important;
                }
                
                #ultimate-user-simulator .ultimate-continue-select {
                    width: 100% !important;
                    margin-bottom: 8px;
                }
                /* 新增代码结束 */                
                #ultimate-user-simulator .ultimate-tabs-nav {
                    justify-content: center;
                }
                
                #ultimate-user-simulator .ultimate-tab-button {
                    flex: 1;
                    text-align: center;
                }
            }
        </style>
        
        <!-- 页签导航 -->
        <div class="ultimate-tabs-container">
            <div class="ultimate-tabs-nav">
                <button class="ultimate-tab-button active" data-tab="paste-parse">
                    <span class="ultimate-tab-icon">📋</span>
                    <span>智能粘贴</span>
                </button>
                <button class="ultimate-tab-button" data-tab="content-editor">
                    <span class="ultimate-tab-icon">✏️</span>
                    <span>内容编辑</span>
                </button>
                <button class="ultimate-tab-button" data-tab="history-panel">
                    <span class="ultimate-tab-icon">🕓</span>
                    <span>发送历史</span>
                </button>
            </div>
        </div>
        
        <!-- 页签内容区域 -->
        <div class="ultimate-tab-content">
            <!-- 第一页签：智能粘贴区域 -->
            <div id="paste-parse-panel" class="ultimate-tab-panel active">
                <!-- 智能粘贴区域 -->
                <div class="ultimate-glass-card">
                    <div class="ultimate-card-header">
                        <div>
                            <h3 style="margin: 0; color: #1e293b; font-size: 14px; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 16px;">📋</span>
                                智能粘贴区域
                            </h3>
                            <div style="font-size: 10px; color: #64748b; font-weight: 500; margin-top: 2px;">支持图文混排粘贴，智能识别内容顺序</div>
                        </div>
                    </div>
                    
                    <div id="ultimate-paste-area" 
                         contenteditable="true" 
                         style="
                            min-height: 230px; 
                            padding: 14px; 
                            border: 2px dashed #10b981; 
                            border-radius: 10px; 
                            background: linear-gradient(145deg, #f0fdf4 0%, #ecfdf5 100%);
                            outline: none; 
                            line-height: 1.6; 
                            font-size: 12px;
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                            position: relative;
                            overflow-wrap: break-word;
                            word-wrap: break-word;
                         "
                         placeholder="直接粘贴图文内容到这里...">
                    </div>
                    
                    <div class="ultimate-feature-list">
                        <div class="ultimate-feature-item">
                            <span class="ultimate-feature-icon">🔄</span>
                            <span class="ultimate-feature-text">智能同步解析 - 彻底解决异步图片问题</span>
                        </div>
                        <div class="ultimate-feature-item">
                            <span class="ultimate-feature-icon">✋</span>
                            <span class="ultimate-feature-text">手动调整顺序 - 拖拽重新排列</span>
                        </div>
                        <div class="ultimate-feature-item">
                            <span class="ultimate-feature-icon">🧠</span>
                            <span class="ultimate-feature-text">AI智能排版 - 自动穿插图片到合适位置</span>
                        </div>
                        <!-- 新增代码开始 - 新功能说明 -->
                        <div class="ultimate-feature-item">
                            <span class="ultimate-feature-icon">🔗</span>
                            <span class="ultimate-feature-text">无间隔同时发送 - 编辑模式下设置多项内容同时发送</span>
                        </div>
                        <!-- 新增代码结束 -->
                    </div>
                </div>
                
                <!-- 解析策略（可折叠） -->
                <div class="ultimate-glass-card">
                    <div class="ultimate-collapsible-header" onclick="toggleCollapseSection('parse-options')">
                        <div>
                            <h3 style="margin: 0; color: #1e293b; font-size: 14px; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 16px;">⚙️</span>
                                解析策略
                            </h3>
                            <div style="font-size: 10px; color: #64748b; font-weight: 500; margin-top: 2px;">自定义解析和发送参数</div>
                        </div>
                        <button class="ultimate-collapse-toggle" id="parse-options-toggle">
                            ▼
                        </button>
                    </div>
                    
                    <div id="parse-options-content" class="ultimate-collapsible-content">
                        <div class="ultimate-grid-2-2" style="margin-bottom: 16px;">
                            <div class="ultimate-input-group">
                                <label class="ultimate-input-label">解析模式</label>
                                <select id="ultimate-parse-mode" class="ultimate-select-modern">
                                    <option value="sync">🔄 同步解析 (推荐)</option>
                                    <option value="manual">✋ 手动调整</option>
                                    <option value="smart">🧠 智能排版</option>
                                    <option value="preserve">📄 保持原始</option>
                                </select>
                            </div>
                            
                            <div class="ultimate-input-group">
                                <label class="ultimate-input-label">分段模式</label>
                                <select id="ultimate-segment-mode" class="ultimate-select-modern">
                                    <option value="paragraph">📃 按段落分割</option>
                                    <option value="quiz">🧮 按答题分割</option>
                                    <option value="sentence">📖 按句子分割</option>
                                    <option value="auto">🎯 智能分割</option>
                                    <option value="none">📄 保持完整</option>
                                    <option value="custom">🔧 自定义长度</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="ultimate-grid-2-2">
                            <div class="ultimate-input-group">
                                <label class="ultimate-input-label">打字速度 (毫秒)</label>
                                <select id="ultimate-typing-speed" class="ultimate-select-modern">
                                    <option value="100" selected>⚖️ 正常 (100ms)</option>
                                    <option value="350" >📝 限制级 (350ms)</option> <!-- 接近1秒间隔的355.56ms -->
                                    <option value="400">📊 更慢 (400ms)</option> <!-- 更易于理解的整数 -->
                                    <option value="850">🐢 极慢 (850ms)</option> <!-- 接近0.5秒间隔的844.44ms -->
                                    <!--
                                    <option value="30">🚀 极快 (30ms)</option>
                                    <option value="50">⚡ 快速 (50ms)</option>
                                    <option value="80">⚖️ 正常 (80ms)</option>
                                    <option value="120">🐌 慢速 (120ms)</option>
                                    <option value="200">🚗 更慢 (200ms)</option>
                    -->
                                </select>
                            </div>
                            
                            <div class="ultimate-input-group">
                                <label class="ultimate-input-label">发送间隔 (毫秒)</label>
                                <select id="ultimate-send-interval" class="ultimate-select-modern">
                                    <option value="500">⚡ 极快 (0.5秒)</option>
                                    <option value="1000" selected>🚀 快速 (1秒)</option>
                                    <option value="2000">⚖️ 正常 (2秒)</option>
                                    <option value="3000">🐌 慢速 (3秒)</option>
                                    <option value="65000">⏰ 答题 (65秒)</option>
                                </select>
                            </div>
                        </div>
                        
                        <div id="custom-segment-section" style="display: none; margin-top: 12px;">
                            <div class="ultimate-input-group">
                                <label class="ultimate-input-label">自定义分割长度</label>
                                <input type="number" 
                                       id="custom-segment-length" 
                                       value="200" 
                                       min="50" 
                                       max="1000" 
                                       class="ultimate-select-modern" 
                                       placeholder="字符数量">
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 操作按钮 -->
                <div class="ultimate-action-buttons">
                    <button onclick="clearUltimatePasteArea()" class="ultimate-btn-tool ultimate-btn-red">
                        <span class="ultimate-btn-icon">🗑️</span>
                        清空粘贴区
                    </button>
                    <button onclick="performUltimateParse()" class="ultimate-btn-tool ultimate-btn紫">
                        <span class="ultimate-btn-icon">🧠</span>
                        智能解析
                    </button>
                </div>
            </div>
            
            <!-- 第二页签：内容编辑器 -->
            <!-- 第三页签：发送历史 -->
            <div id="history-panel-panel" class="ultimate-tab-panel">
                <div class="ultimate-glass-card">
                    <div class="ultimate-card-header">
                        <div>
                            <h3 style="margin: 0; color: #1e293b; font-size: 14px; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 16px;">📚</span>
                                发送历史管理
                            </h3>
                            <div style="font-size: 10px; color: #64748b; font-weight: 500; margin-top: 2px;">导入/导出历史记录，便于迁移和备份</div>
                        </div>
                    </div>
                    <div style="display: flex; gap: 16px; margin-top: 12px; flex-wrap: wrap;">
                        <button id="ultimate-history-export-tab" class="ultimate-btn-tool ultimate-btn-purple">
                            <span class="ultimate-btn-icon">📤</span> 导出历史
                        </button>
                        <button id="ultimate-history-import-tab" class="ultimate-btn-tool ultimate-btn-cyan">
                            <span class="ultimate-btn-icon">📥</span> 导入历史
                        </button>
                    </div>
                    <div style="margin-top:18px; color:#64748b; font-size:12px;">
                        <ul style="padding-left:18px;">
                            <li>导出：将当前内容和设置保存为JSON文件</li>
                            <li>导入：从历史JSON文件恢复内容和设置</li>
                        </ul>
                    </div>
                </div>
                <!-- 新增：模板编辑功能区域 -->
                <div class="ultimate-glass-card" style="margin-top: 18px;">
                    <div class="ultimate-card-header">
                        <div>
                            <h3 style="margin: 0; color: #1e293b; font-size: 14px; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 16px;">📝</span>
                                模板编辑功能
                            </h3>
                            <div style="font-size: 10px; color: #64748b; font-weight: 500; margin-top: 2px;">模板编辑功能，点击"编辑模板"按钮跳转类似"序列预览"一样的页面，可以可视化编辑图文，并保存为json，用于手动制作历史json记录。</div>
                        </div>
                    </div>
                    <div style="display: flex; gap: 16px; margin-top: 12px; flex-wrap: wrap;">
                        <button id="ultimate-template-edit-btn" class="ultimate-btn-tool ultimate-btn-green">
                            <span class="ultimate-btn-icon">📝</span> 编辑模板
                        </button>
                    </div>
                </div>
                </div>
            </div>
            <div id="content-editor-panel" class="ultimate-tab-panel">
                <!-- 内容序列编辑器 -->
                <div class="ultimate-glass-card">
                    <div class="ultimate-card-header">
                        <div>
                            <h3 style="margin: 0; color: #1e293b; font-size: 14px; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 16px;">✏️</span>
                                内容序列编辑器
                                <!-- 新增代码开始 - 无间隔发送说明 
                                <span style="font-size: 10px; background: rgba(245, 158, 11, 0.1); color: #d97706; padding: 3px 8px; border-radius: 10px; font-weight: 500;">支持无间隔同时发送</span>
                                 新增代码结束 -->
                            </h3>
                            <div style="font-size: 10px; color:rgb(6, 6, 7); font-weight: 500; margin-top: 2px;">拖拽调整顺序，点击编辑内容</div>
                        </div>
                        <div class="ultimate-editor-controls">
                            <span id="ultimate-content-count" class="ultimate-count-badge">0 项内容</span>
                            <button id="toggle-edit-mode" onclick="toggleEditMode()" class="ultimate-btn-secondary">
                                <span class="ultimate-btn-icon">✏️</span>
                                编辑模式
                            </button>
                        </div>
                    </div>
                    
                    <div id="ultimate-content-editor" class="ultimate-content-editor">
                        <div class="ultimate-empty-state">
                            <div class="ultimate-empty-icon">📝</div>
                            <div class="ultimate-empty-text">等待粘贴和解析内容...</div>
                            <div class="ultimate-empty-hint">请先在"智能粘贴"页签中粘贴内容并解析</div>
                        </div>
                    </div>
                    
                    <!-- 编辑工具栏 -->
                    <div id="editor-toolbar" class="ultimate-editor-toolbar">
                        <div class="ultimate-toolbar-section">
                            <button onclick="addTextElement()" class="ultimate-btn-tool ultimate-btn-cyan">
                                <span class="ultimate-btn-icon">📝</span>
                                添加文本
                            </button>
                            <button onclick="addImageElement()" class="ultimate-btn-tool ultimate-btn-green">
                                <span class="ultimate-btn-icon">🖼️</span>
                                添加图片
                            </button>
                            <button onclick="performSmartArrange()" class="ultimate-btn-tool ultimate-btn紫">
                                <span class="ultimate-btn-icon">✨</span>
                                智能排版
                            </button>
                            <button onclick="clearAllContent()" class="ultimate-btn-tool ultimate-btn-red">
                                <span class="ultimate-btn-icon">🗑️</span>
                                清空全部
                            </button>
                        </div>
                        <div class="ultimate-toolbar-info">
                            <!-- 新增代码开始 - 编辑模式说明更新 -->
                            <span id="selected-position-info">点击项目选择插入位置，或在末尾添加</span><br>
                            <strong>🔗 同时发送功能：</strong>点击内容项右上角的链接按钮可设置与下一项无间隔同时发送
                            <!-- 新增代码结束 -->
                        </div>
                    </div>
                </div>
                
                <!-- 发送控制 -->
                <div class="ultimate-glass-card">
                    <div class="ultimate-card-header">
                        <div>
                            <h3 style="margin: 0; color: #1e293b; font-size: 14px; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 16px;">🚀</span>
                                发送控制
                            </h3>
                            <div style="font-size: 10px; color: #64748b; font-weight: 500; margin-top: 2px;">控制序列发送过程</div>
                        </div>
                    </div>
                    
                    <!-- 主要发送按钮 -->
                    <div class="ultimate-action-buttons">
                        <button id="ultimate-start-sequence" onclick="startUltimateSequence()" class="ultimate-btn-primary" disabled style="opacity: 0.6;">
                            <span class="ultimate-btn-icon">🚀</span>
                            <span>开始发送序列</span>
                        </button>
                        <button onclick="previewSequence()" class="ultimate-btn-warning">
                            <span class="ultimate-btn-icon">👁️</span>
                            <span>预览序列</span>
                        </button>
                    </div>
                    
                    <!-- 发送过程控制按钮 -->
                    <div id="sending-controls" class="ultimate-sending-controls">
                        <button onclick="pauseSequence()" id="pause-sequence-btn" class="ultimate-btn-warning">
                            <span class="ultimate-btn-icon">⏸️</span>
                            <span>暂停</span>
                        </button>
                        <button onclick="resumeSequence()" id="resume-sequence-btn" class="ultimate-btn-success" style="display: none;">
                            <span class="ultimate-btn-icon">▶️</span>
                            <span>继续</span>
                        </button>
                        <button onclick="stopSequence()" class="ultimate-btn-danger">
                            <span class="ultimate-btn-icon">⏹️</span>
                            <span>停止</span>
                        </button>
                    </div>
                    
                    <!-- 新增代码开始 - 从指定序号继续发送的控件 -->
                    <div id="continue-from-controls" class="ultimate-continue-from-controls">
                        <span class="ultimate-continue-label">从指定序号继续：</span>
                        <select id="continue-from-select" class="ultimate-continue-select" onchange="updateContinueFromSelect()">
                            <option value="0">从头开始</option>
                        </select>
                        <button id="continue-from-btn" onclick="startFromSelectedIndex()" class="ultimate-btn-success">
                            <span class="ultimate-btn-icon">🚀</span>
                            <span>从头开始</span>
                        </button>
                    </div>
                    <!-- 新增代码结束 -->
                </div>
            </div>
        </div>
    `;
    
    simulator.appendChild(content);
    document.body.appendChild(simulator);
    
    // 新增代码开始 - 初始化全局变量，如果有保存的状态则恢复，否则使用默认值
    if (window.ultimateSimulatorState) {
        // 恢复保存的状态
        console.log('🔄 恢复之前保存的助手状态...');
        window.ultimateContentSequence = window.ultimateSimulatorState.contentSequence || [];
        window.selectedInsertPosition = window.ultimateSimulatorState.selectedInsertPosition || -1;
        window.isEditMode = window.ultimateSimulatorState.isEditMode || false;
        window.isSending = false; // 发送状态始终重置
        window.isPaused = false;
        window.sendingAborted = false;
        window.currentSendingIndex = 0;
        window.ultimateSimulatorVisible = true;
        
        // 恢复界面设置
        if (window.ultimateSimulatorState.parseSettings) {
            const settings = window.ultimateSimulatorState.parseSettings;
            if (settings.parseMode) {
                document.getElementById('ultimate-parse-mode').value = settings.parseMode;
            }
            if (settings.segmentMode) {
                document.getElementById('ultimate-segment-mode').value = settings.segmentMode;
            }
            if (settings.typingSpeed) {
                document.getElementById('ultimate-typing-speed').value = settings.typingSpeed;
            }
            if (settings.sendInterval) {
                document.getElementById('ultimate-send-interval').value = settings.sendInterval;
            }
            if (settings.customSegmentLength) {
                document.getElementById('custom-segment-length').value = settings.customSegmentLength;
            }
        }
        
        // 恢复编辑模式
        if (window.isEditMode) {
            setTimeout(() => {
                const toolbar = document.getElementById('editor-toolbar');
                const toggleBtn = document.getElementById('toggle-edit-mode');
                
                toolbar.style.display = 'block';
                toggleBtn.textContent = '📝 退出编辑';
                toggleBtn.classList.add('edit-mode-active');
            }, 100);
        }
        
        // 恢复内容编辑器
        setTimeout(() => {
            updateContentEditor();
            
            // 如果有内容，启用发送按钮
            if (window.ultimateContentSequence.length > 0) {
                const sendBtn = document.getElementById('ultimate-start-sequence');
                sendBtn.disabled = false;
                sendBtn.style.opacity = '1';
                
                // 更新从指定序号继续的选项
                updateContinueFromOptions();
                document.getElementById('continue-from-controls').style.display = 'flex';
                
                // 自动切换到内容编辑页签
                const editorTabBtn = document.querySelector('[data-tab="content-editor"]');
                if (editorTabBtn) {
                    editorTabBtn.click();
                }
            }
        }, 150);
        
        showUltimateToast('✅ 已恢复之前的工作状态', 'success');
    } else {
        // 使用默认值初始化
        window.ultimateContentSequence = [];
        window.selectedInsertPosition = -1;
        window.isEditMode = false;
        window.isSending = false;
        window.isPaused = false;
        window.sendingAborted = false;
        window.currentSendingIndex = 0;
        window.ultimateSimulatorVisible = true;
    }
    // 新增代码结束
    
    // 设置事件监听器
    setupUltimateEventListeners();
    // 新增：历史tab按钮事件
    setTimeout(() => {
        const exportBtnTab = document.getElementById('ultimate-history-export-tab');
        const importBtnTab = document.getElementById('ultimate-history-import-tab');
        // 新增：模板编辑按钮事件
        const templateEditBtn = document.getElementById('ultimate-template-edit-btn');
        
        if(exportBtnTab) exportBtnTab.onclick = exportUltimateHistory;
        if(importBtnTab) importBtnTab.onclick = importUltimateHistory;
        if(templateEditBtn) templateEditBtn.onclick = editTemplate;
    }, 300);
    
    // 新增代码开始 - 恢复保存的状态
    restoreUltimateSimulatorState();
    // 新增代码结束
    
    // 启用拖拽
    makeDraggableUltimateSimple(simulator, header);
    
    // 设置最小化按钮
    document.getElementById('minimize-ultimate-simulator').onclick = function() {
        const targetSimulator = document.getElementById('ultimate-user-simulator');
        if (targetSimulator.classList.contains('minimized')) {
            targetSimulator.classList.remove('minimized');
            targetSimulator.querySelector('#ultimate-content-area').style.display = 'flex';
            this.textContent = '−';
        } else {
            targetSimulator.classList.add('minimized');
            targetSimulator.querySelector('#ultimate-content-area').style.display = 'none';
            this.textContent = '+';
        }
    };
    
    // 设置关闭按钮
    document.getElementById('close-ultimate-simulator').onclick = function() {
        // 新增代码开始 - 关闭时保存状态
        saveUltimateSimulatorState();
        // 新增代码结束
        
        const targetSimulator = document.getElementById('ultimate-user-simulator');
        targetSimulator.style.animation = 'slideOutRightUltimate 0.3s ease-in';
        setTimeout(() => {
            targetSimulator.remove();
            window.ultimateSimulatorVisible = false;
        }, 300);
    };
}

// 新增代码开始 - 状态保存和恢复功能
/**
 * 保存助手状态到内存
 */
function saveUltimateSimulatorState() {
    try {
        const parseSettings = {
            parseMode: document.getElementById('ultimate-parse-mode')?.value || 'sync',
            segmentMode: document.getElementById('ultimate-segment-mode')?.value || 'paragraph',
            typingSpeed: document.getElementById('ultimate-typing-speed')?.value || '100',
            sendInterval: document.getElementById('ultimate-send-interval')?.value || '1000',
            customSegmentLength: document.getElementById('custom-segment-length')?.value || '200'
        };
        
        window.ultimateSimulatorState = {
            contentSequence: window.ultimateContentSequence || [],
            selectedInsertPosition: window.selectedInsertPosition || -1,
            isEditMode: window.isEditMode || false,
            parseSettings: parseSettings,
            timestamp: Date.now()
        };
        
        console.log('💾 助手状态已保存', window.ultimateSimulatorState);
    } catch (error) {
        console.error('❌ 保存助手状态失败:', error);
    }
}

/**
 * 恢复助手状态（在创建助手后调用）
 */
function restoreUltimateSimulatorState() {
    // 这个函数在createUltimateUserSimulator中已经处理了状态恢复
    // 这里保留为备用接口
}
// 新增代码结束

// 全局变量初始化 - 精致版
window.ultimateContentSequence = window.ultimateContentSequence || [];
window.selectedInsertPosition = -1;
window.isEditMode = false;
window.isSending = false;
window.isPaused = false;
window.sendingAborted = false;
window.currentSendingIndex = 0;
window.ultimateSimulatorVisible = true;

// 设置事件监听器 - 精致版
function setupUltimateEventListeners() {
    // 页签切换
    document.querySelectorAll('.ultimate-tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            switchUltimateTab(tabId);
        });
    });
    
    // 监听分段模式变化，显示/隐藏自定义长度输入
    setTimeout(() => {
        const segmentModeSelect = document.getElementById('ultimate-segment-mode');
        const customSection = document.getElementById('custom-segment-section');
        
        if (segmentModeSelect && customSection) {
            segmentModeSelect.addEventListener('change', function() {
                if (this.value === 'custom') {
                    customSection.style.display = 'block';
                } else {
                    customSection.style.display = 'none';
                }
            });
        }
    }, 100);
}

// 页签切换函数 - 精致版
function switchUltimateTab(tabId) {
    // 隐藏所有页签面板
    document.querySelectorAll('.ultimate-tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // 移除所有页签按钮的激活状态
    document.querySelectorAll('.ultimate-tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // 显示目标页签面板
    const targetPanel = document.getElementById(tabId + '-panel');
    if (targetPanel) {
        targetPanel.classList.add('active');
    }
    
    // 激活对应的页签按钮
    const targetButton = document.querySelector(`[data-tab="${tabId}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
}

// 折叠面板切换 - 精致版
function toggleCollapseSection(sectionId) {
    const content = document.getElementById(sectionId + '-content');
    const toggle = document.getElementById(sectionId + '-toggle');
    
    if (!content || !toggle) return;
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        toggle.style.transform = 'rotate(0deg)';
    } else {
        content.classList.add('expanded');
        toggle.style.transform = 'rotate(180deg)';
    }
}

// 清空粘贴区域 - 精致版
function clearUltimatePasteArea() {
    const pasteArea = document.getElementById('ultimate-paste-area');
    if (pasteArea) {
        pasteArea.innerHTML = '';
        showUltimateToast('🗑️ 粘贴区域已清空', 'info');
    }
}

// 智能解析函数 - 增强版本
async function performUltimateParse() {
    const pasteArea = document.getElementById('ultimate-paste-area');
    if (!pasteArea) return;
    
    const children = Array.from(pasteArea.children);
    if (children.length === 0) {
        showUltimateToast('⚠️ 粘贴区域为空，请先粘贴内容', 'warning');
        return;
    }
    
    showUltimateToast('🧠 开始智能解析...', 'info');
    
    const parseMode = document.getElementById('ultimate-parse-mode')?.value || 'sync';
    const segmentMode = document.getElementById('ultimate-segment-mode')?.value || 'paragraph';
    const customLength = parseInt(document.getElementById('custom-segment-length')?.value) || 200;
    
    let contentSequence = [];
    
    try {
        // 同步解析，确保顺序正确
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            await new Promise(resolve => setTimeout(resolve, 50)); // 小延迟确保同步
            
            if (element.tagName === 'IMG') {
                // 处理图片
                const imgSrc = element.src;
                if (imgSrc && imgSrc.startsWith('data:')) {
                    contentSequence.push({
                        type: 'image',
                        content: imgSrc,
                        id: generateUniqueId()
                    });
                }
            } else if (element.tagName === 'P' || element.tagName === 'DIV' || element.textContent.trim()) {
                // 处理文本
                let textContent = element.textContent.trim();
                
                if (textContent) {
                    // 根据分段模式处理文本
                    const textSegments = segmentText(textContent, segmentMode, customLength);
                    
                    textSegments.forEach(segment => {
                        if (segment.trim()) {
                            contentSequence.push({
                                type: 'text',
                                content: segment.trim(),
                                id: generateUniqueId()
                            });
                        }
                    });
                }
            }
        }
        
        // 应用解析模式处理
        if (parseMode === 'smart') {
            contentSequence = applySmartArrangement(contentSequence);
        }
        
        // 更新全局序列
        window.ultimateContentSequence = contentSequence;
        
        // 新增代码开始 - 清除发送组状态
        window.ultimateContentSequence.forEach(item => {
            item.sendWithNext = false;
        });
        // 新增代码结束
        
        // 自动切换到内容编辑页签并更新编辑器
        switchUltimateTab('content-editor');
        updateContentEditor();
        
        // 启用发送按钮
        const sendBtn = document.getElementById('ultimate-start-sequence');
        if (sendBtn) {
            sendBtn.disabled = false;
            sendBtn.style.opacity = '1';
        }
        
        // 新增代码开始 - 更新从指定序号继续的选项
        updateContinueFromOptions();
        document.getElementById('continue-from-controls').style.display = 'flex';
        // 新增代码结束
        
        showUltimateToast(`✅ 解析完成！共生成 ${contentSequence.length} 项内容`, 'success');
        
    } catch (error) {
        console.error('解析过程出错:', error);
        showUltimateToast('❌ 解析过程出现错误', 'error');
    }
}

// 文本分段函数 - 精致版
function segmentText(text, mode, customLength) {
    switch (mode) {
        case 'paragraph':
            return text.split(/\n\s*\n/).filter(p => p.trim());
            
        case 'sentence':
            return text.split(/[。！？.!?]/).filter(s => s.trim()).map(s => s + '。');
            
        case 'quiz':
            // 检测答题格式（数字、字母或汉字序号）
            const quizPattern = /(?:^|\n)(?:\d+[.\、]|[A-Za-z][.\、]|[一二三四五六七八九十][.\、])/;
            if (quizPattern.test(text)) {
                return text.split(/(?=(?:\d+[.\、]|[A-Za-z][.\、]|[一二三四五六七八九十][.\、]))/);
            }
            return [text];
            
        case 'auto':
            // 智能分割：优先按段落，然后按句子，最后按长度
            if (text.includes('\n\n')) {
                return segmentText(text, 'paragraph', customLength);
            } else if (text.length > 300) {
                return segmentText(text, 'sentence', customLength);
            }
            return [text];
            
        case 'custom':
            const segments = [];
            for (let i = 0; i < text.length; i += customLength) {
                segments.push(text.slice(i, i + customLength));
            }
            return segments;
            
        case 'none':
        default:
            return [text];
    }
}

// 智能排版函数 - 精致版
function applySmartArrangement(sequence) {
    const arranged = [];
    const images = sequence.filter(item => item.type === 'image');
    const texts = sequence.filter(item => item.type === 'text');
    
    if (images.length === 0) return sequence;
    
    const textPerImage = Math.ceil(texts.length / images.length);
    
    let textIndex = 0;
    let imageIndex = 0;
    
    while (textIndex < texts.length || imageIndex < images.length) {
        // 添加文本段落
        for (let i = 0; i < textPerImage && textIndex < texts.length; i++) {
            arranged.push(texts[textIndex++]);
        }
        
        // 添加图片
        if (imageIndex < images.length) {
            arranged.push(images[imageIndex++]);
        }
    }
    
    return arranged;
}

// 更新内容编辑器 - 精致版
function updateContentEditor() {
    const editor = document.getElementById('ultimate-content-editor');
    const countBadge = document.getElementById('ultimate-content-count');
    
    if (!editor || !countBadge) return;
    
    if (!window.ultimateContentSequence || window.ultimateContentSequence.length === 0) {
        editor.innerHTML = `
            <div class="ultimate-empty-state">
                <div class="ultimate-empty-icon">📝</div>
                <div class="ultimate-empty-text">等待粘贴和解析内容...</div>
                <div class="ultimate-empty-hint">请先在"智能粘贴"页签中粘贴内容并解析</div>
            </div>
        `;
        countBadge.textContent = '0 项内容';
        return;
    }
    
    // 更新计数
    countBadge.textContent = `${window.ultimateContentSequence.length} 项内容`;
    
    // 新增代码开始 - 计算发送组
    const sendGroups = calculateSendGroups();
    // 新增代码结束
    
    // 生成内容项
    let editorHTML = '';
    window.ultimateContentSequence.forEach((item, index) => {
        const isSelected = window.selectedInsertPosition === index;
        const selectedClass = isSelected ? ' selected' : '';
        
        // 新增代码开始 - 发送组样式
        const sendWithNextClass = item.sendWithNext ? ' send-with-next' : '';
        const inGroupClass = sendGroups.some(group => group.includes(index)) ? ' in-send-group' : '';
        // 新增代码结束
        
        if (item.type === 'text') {
            editorHTML += `
                <div class="ultimate-content-item ultimate-text-item${selectedClass}${sendWithNextClass}${inGroupClass}" 
                     data-index="${index}" 
                     onclick="selectContentItem(${index})">
                    ${window.isEditMode ? `
                        <div class="ultimate-drag-handle" onmousedown="startDrag(event, ${index})">⋮⋮</div>
                        <button class="ultimate-delete-btn" onclick="deleteContentItem(${index}); event.stopPropagation();">×</button>
                        <button class="ultimate-edit-btn" onclick="editContentItem(${index}); event.stopPropagation();">✏️</button>
                        <button class="ultimate-send-with-btn${item.sendWithNext ? ' active' : ''}" 
                                onclick="toggleSendWithNext(${index}); event.stopPropagation();" 
                                title="${item.sendWithNext ? '取消与下一项同时发送' : '设置与下一项同时发送'}">🔗</button>
                    ` : ''}
                    <div class="ultimate-item-header">📝 文本内容 #${index + 1}</div>
                    <div class="ultimate-text-preview">${item.content}</div>
                </div>
            `;
        } else if (item.type === 'image') {
            editorHTML += `
                <div class="ultimate-content-item ultimate-image-item${selectedClass}${sendWithNextClass}${inGroupClass}" 
                     data-index="${index}" 
                     onclick="selectContentItem(${index})">
                    ${window.isEditMode ? `
                        <div class="ultimate-drag-handle" onmousedown="startDrag(event, ${index})">⋮⋮</div>
                        <button class="ultimate-delete-btn" onclick="deleteContentItem(${index}); event.stopPropagation();">×</button>
                        <button class="ultimate-send-with-btn${item.sendWithNext ? ' active' : ''}" 
                                onclick="toggleSendWithNext(${index}); event.stopPropagation();" 
                                title="${item.sendWithNext ? '取消与下一项同时发送' : '设置与下一项同时发送'}">🔗</button>
                    ` : ''}
                    <div class="ultimate-item-header">🖼️ 图片内容 #${index + 1}</div>
                    <img src="${item.content}" alt="图片预览" class="ultimate-image-preview" />
                </div>
            `;
        }
    });
    
    editor.innerHTML = editorHTML;
    
    // 新增代码开始 - 保存状态
    saveUltimateSimulatorState();
    // 新增代码结束
}

// 新增代码开始 - 计算发送组的辅助函数
function calculateSendGroups() {
    const groups = [];
    let currentGroup = [];
    
    for (let i = 0; i < window.ultimateContentSequence.length; i++) {
        currentGroup.push(i);
        
        if (window.ultimateContentSequence[i].sendWithNext && i < window.ultimateContentSequence.length - 1) {
            // 继续当前组
            continue;
        } else {
            // 结束当前组
            if (currentGroup.length > 1) {
                groups.push([...currentGroup]);
            }
            currentGroup = [];
        }
    }
    
    return groups;
}

// 切换发送组状态
function toggleSendWithNext(index) {
    if (!window.ultimateContentSequence[index]) return;
    
    // 如果是最后一项，不能设置为与下一项发送
    if (index >= window.ultimateContentSequence.length - 1) {
        showUltimateToast('⚠️ 最后一项不能设置与下一项同时发送', 'warning');
        return;
    }
    
    window.ultimateContentSequence[index].sendWithNext = !window.ultimateContentSequence[index].sendWithNext;
    
    updateContentEditor();
    
    const status = window.ultimateContentSequence[index].sendWithNext ? '已设置' : '已取消';
    showUltimateToast(`🔗 ${status}与下一项同时发送`, 'info');
}
// 新增代码结束

// 选择内容项插入位置 - 精致版
function selectContentItem(index) {
    if (!window.isEditMode) return;
    
    window.selectedInsertPosition = index;
    updateContentEditor();
    
    const positionInfo = document.getElementById('selected-position-info');
    if (positionInfo) {
        positionInfo.textContent = `已选择插入位置：第 ${index + 1} 项之前`;
    }
}

// 编辑模式切换 - 精致版
function toggleEditMode() {
    window.isEditMode = !window.isEditMode;
    
    const toolbar = document.getElementById('editor-toolbar');
    const toggleBtn = document.getElementById('toggle-edit-mode');
    
    if (window.isEditMode) {
        toolbar.style.display = 'block';
        toggleBtn.innerHTML = '<span class="ultimate-btn-icon">📝</span>退出编辑';
        toggleBtn.classList.add('edit-mode-active');
        showUltimateToast('✏️ 已进入编辑模式', 'info');
    } else {
        toolbar.style.display = 'none';
        toggleBtn.innerHTML = '<span class="ultimate-btn-icon">✏️</span>编辑模式';
        toggleBtn.classList.remove('edit-mode-active');
        window.selectedInsertPosition = -1;
        showUltimateToast('👁️ 已退出编辑模式', 'info');
    }
    
    updateContentEditor();
    
    // 新增代码开始 - 保存状态
    saveUltimateSimulatorState();
    // 新增代码结束
}

// 删除内容项 - 精致版
function deleteContentItem(index) {
    if (index >= 0 && index < window.ultimateContentSequence.length) {
        window.ultimateContentSequence.splice(index, 1);
        
        // 调整选中位置
        if (window.selectedInsertPosition > index) {
            window.selectedInsertPosition--;
        } else if (window.selectedInsertPosition === index) {
            window.selectedInsertPosition = -1;
        }
        
        updateContentEditor();
        
        // 新增代码开始 - 更新从指定序号继续的选项
        updateContinueFromOptions();
        if (window.ultimateContentSequence.length === 0) {
            document.getElementById('continue-from-controls').style.display = 'none';
            const sendBtn = document.getElementById('ultimate-start-sequence');
            if (sendBtn) {
                sendBtn.disabled = true;
                sendBtn.style.opacity = '0.6';
            }
        }
        // 新增代码结束
        
        showUltimateToast('🗑️ 内容项已删除', 'info');
    }
}

// 编辑内容项 - 精致版
function editContentItem(index) {
    const item = window.ultimateContentSequence[index];
    if (!item || item.type !== 'text') return;
    
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'ultimate-text-edit-modal';
    modal.innerHTML = `
        <div class="ultimate-text-edit-content">
            <h3 style="margin: 0 0 16px 0; color: #1e293b; font-size: 16px; font-weight: 700;">
                📝 编辑文本内容
            </h3>
            <textarea 
                class="ultimate-text-edit-textarea" 
                placeholder="请输入文本内容..."
            >${item.content}</textarea>
            <div class="ultimate-text-edit-buttons">
                <button onclick="closeTextEditModal()" class="ultimate-btn-secondary">
                    取消
                </button>
                <button onclick="saveTextEdit(${index})" class="ultimate-btn-primary">
                    保存
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 聚焦到文本区域
    setTimeout(() => {
        const textarea = modal.querySelector('.ultimate-text-edit-textarea');
        textarea.focus();
        textarea.select();
    }, 100);
    
    // 点击模态框背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeTextEditModal();
        }
    });
}

// 关闭文本编辑模态框
function closeTextEditModal() {
    const modal = document.querySelector('.ultimate-text-edit-modal');
    if (modal) {
        modal.remove();
    }
}

// 保存文本编辑
function saveTextEdit(index) {
    const modal = document.querySelector('.ultimate-text-edit-modal');
    const textarea = modal.querySelector('.ultimate-text-edit-textarea');
    
    if (textarea && window.ultimateContentSequence[index]) {
        const newContent = textarea.value.trim();
        if (newContent) {
            window.ultimateContentSequence[index].content = newContent;
            updateContentEditor();
            showUltimateToast('✅ 文本内容已更新', 'success');
        } else {
            showUltimateToast('⚠️ 文本内容不能为空', 'warning');
        }
    }
    
    closeTextEditModal();
}

// 添加文本元素 - 精致版
function addTextElement() {
    const content = prompt('请输入文本内容:');
    if (!content || !content.trim()) return;
    
    const newItem = {
        type: 'text',
        content: content.trim(),
        id: generateUniqueId()
    };
    
    insertContentItem(newItem);
}

// 添加图片元素 - 精致版
function addImageElement() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function(evt) {
            const newItem = {
                type: 'image',
                content: evt.target.result,
                id: generateUniqueId()
            };
            
            insertContentItem(newItem);
        };
        reader.readAsDataURL(file);
    };
    input.click();
}

// 插入内容项 - 精致版
function insertContentItem(item) {
    const insertIndex = window.selectedInsertPosition >= 0 ? 
        window.selectedInsertPosition : 
        window.ultimateContentSequence.length;
    
    window.ultimateContentSequence.splice(insertIndex, 0, item);
    
    // 重置选中位置
    window.selectedInsertPosition = -1;
    
    updateContentEditor();
    
    // 启用发送按钮
    const sendBtn = document.getElementById('ultimate-start-sequence');
    if (sendBtn) {
        sendBtn.disabled = false;
        sendBtn.style.opacity = '1';
    }
    
    // 新增代码开始 - 更新从指定序号继续的选项
    updateContinueFromOptions();
    document.getElementById('continue-from-controls').style.display = 'flex';
    // 新增代码结束
    
    showUltimateToast(`✅ ${item.type === 'text' ? '文本' : '图片'}已添加`, 'success');
}

// 执行智能排版 - 精致版
function performSmartArrange() {
    if (!window.ultimateContentSequence.length) {
        showUltimateToast('⚠️ 没有内容可排版', 'warning');
        return;
    }
    
    window.ultimateContentSequence = applySmartArrangement(window.ultimateContentSequence);
    updateContentEditor();
    showUltimateToast('✨ 智能排版已完成', 'success');
}

// 清空全部内容 - 精致版
function clearAllContent() {
    if (!window.ultimateContentSequence.length) {
        showUltimateToast('⚠️ 内容已为空', 'warning');
        return;
    }
    
    if (confirm('确定要清空全部内容吗？此操作不可撤销。')) {
        window.ultimateContentSequence = [];
        window.selectedInsertPosition = -1;
        updateContentEditor();
        
        // 禁用发送按钮
        const sendBtn = document.getElementById('ultimate-start-sequence');
        if (sendBtn) {
            sendBtn.disabled = true;
            sendBtn.style.opacity = '0.6';
        }
        
        // 新增代码开始 - 隐藏从指定序号继续的控件
        document.getElementById('continue-from-controls').style.display = 'none';
        // 新增代码结束
        
        showUltimateToast('🗑️ 全部内容已清空', 'info');
    }
}

// 新增代码开始 - 从指定序号继续发送相关功能

/**
 * 更新从指定序号继续的选项
 */
function updateContinueFromOptions() {
    const continueSelect = document.getElementById('continue-from-select');
    if (!continueSelect) return;
    
    // 清空现有选项
    continueSelect.innerHTML = '<option value="0">从头开始</option>';
    
    // 添加序号选项
    for (let i = 1; i < window.ultimateContentSequence.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        const item = window.ultimateContentSequence[i];
        const type = item.type === 'text' ? '📝' : '🖼️';
        const preview = item.type === 'text' ? 
            (item.content.substring(0, 15) + (item.content.length > 15 ? '...' : '')) : 
            '图片';
        option.textContent = `${i + 1}. ${type} ${preview}`;
        continueSelect.appendChild(option);
    }
}

/**
 * 从指定索引开始发送
 */
function startFromSelectedIndex() {
    const continueSelect = document.getElementById('continue-from-select');
    const selectedIndex = parseInt(continueSelect.value) || 0;
    
    if (selectedIndex >= window.ultimateContentSequence.length) {
        showUltimateToast('⚠️ 选择的序号超出范围', 'warning');
        return;
    }
    
    // 设置全局发送起始索引
    window.currentSendingIndex = selectedIndex;
    
    // 开始发送序列
    startUltimateSequence();
}
// 新增代码结束

// 开始发送序列 - 增强版本（支持同时发送组）
async function startUltimateSequence() {
    if (!window.ultimateContentSequence || window.ultimateContentSequence.length === 0) {
        showUltimateToast('⚠️ 没有内容可发送', 'warning');
        return;
    }
    
    // 新增代码开始 - 支持从指定索引开始
    const startIndex = window.currentSendingIndex || 0;
    if (startIndex >= window.ultimateContentSequence.length) {
        showUltimateToast('⚠️ 起始位置超出范围', 'warning');
        return;
    }
    // 新增代码结束
    
    const typingSpeed = parseInt(document.getElementById('ultimate-typing-speed')?.value) || 100;
    const sendInterval = parseInt(document.getElementById('ultimate-send-interval')?.value) || 1000;
    
    // 重置状态
    window.isSending = true;
    window.isPaused = false;
    window.sendingAborted = false;
    
    // 调整界面
    document.getElementById('ultimate-start-sequence').style.display = 'none';
    document.getElementById('sending-controls').style.display = 'flex';
    document.getElementById('continue-from-controls').style.display = 'none';
    
    showUltimateToast('🚀 开始发送序列...', 'info');
    
    try {
        const chatbox = findChatInputBox();
        if (!chatbox) {
            throw new Error('未找到聊天输入框');
        }
        
        // 新增代码开始 - 从指定索引开始循环
        for (let i = startIndex; i < window.ultimateContentSequence.length; i++) {
        // 新增代码结束
            if (window.sendingAborted) {
                showUltimateToast('⏹️ 发送已停止', 'warning');
                break;
            }
            
            // 检查暂停状态
            while (window.isPaused) {
                await new Promise(resolve => setTimeout(resolve, 500));
                if (window.sendingAborted) break;
            }
            
            if (window.sendingAborted) break;
            
            const item = window.ultimateContentSequence[i];
            
            // 新增代码开始 - 同时发送组处理
            const sendGroup = [item];
            let j = i + 1;
            
            // 收集需要同时发送的项目
            while (j <= window.ultimateContentSequence.length && 
                   window.ultimateContentSequence[i + sendGroup.length - 1]?.sendWithNext) {
                if (window.ultimateContentSequence[j]) {
                    sendGroup.push(window.ultimateContentSequence[j]);
                }
                j++;
            }
            
            // 发送整个组
            for (const groupItem of sendGroup) {
                if (groupItem.type === 'text') {
                    await typeTextWithSpeed(chatbox, groupItem.content, typingSpeed);
                } else if (groupItem.type === 'image') {
                    await pasteImageToChat(chatbox, groupItem.content);
                }
                
                // 检查是否需要暂停或停止
                if (window.sendingAborted) break;
                while (window.isPaused) {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    if (window.sendingAborted) break;
                }
            }
            
            // 发送消息（整个组一起发送）
            if (!window.sendingAborted) {
                await sendMessage(chatbox);
                
                // 跳过组中的其他项目
                i = j - 1;
                
                // 等待发送间隔（除非是最后一项）
                if (i < window.ultimateContentSequence.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, sendInterval));
                }
            }
            // 新增代码结束
        }
        
        showUltimateToast('✅ 序列发送完成！', 'success');
        
    } catch (error) {
        console.error('发送过程出错:', error);
        showUltimateToast('❌ 发送过程出现错误', 'error');
    } finally {
        // 重置状态
        window.isSending = false;
        window.isPaused = false;
        window.sendingAborted = false;
        window.currentSendingIndex = 0;
        
        // 恢复界面
        document.getElementById('sending-controls').style.display = 'none';
        document.getElementById('ultimate-start-sequence').style.display = 'flex';
        document.getElementById('continue-from-controls').style.display = 'none';
    }
}

// 新增代码开始 - 从指定索引开始发送的增强版本
/**
 * 从当前选择的索引开始发送序列
 */
async function startFromSelectedIndex() {
    const continueSelect = document.getElementById('continue-from-select');
    const selectedIndex = parseInt(continueSelect.value) || 0;
    
    if (selectedIndex >= window.ultimateContentSequence.length) {
        showUltimateToast('⚠️ 选择的序号超出范围', 'warning');
        return;
    }
    
    // 设置全局发送起始索引
    window.currentSendingIndex = selectedIndex;
    
    const remainingItems = window.ultimateContentSequence.length - selectedIndex;
    const message = selectedIndex === 0 ? 
        '🚀 从头开始发送序列...' : 
        `🎯 从第 ${selectedIndex + 1} 项开始发送 (共 ${remainingItems} 项)...`;
    
    showUltimateToast(message, 'info');
    
    // 开始发送序列
    await startUltimateSequence();
}

/**
 * 更新"从指定序号继续"的选项
 */
function updateContinueFromOptions() {
    const continueSelect = document.getElementById('continue-from-select');
    if (!continueSelect || !window.ultimateContentSequence) return;
    
    // 清空现有选项
    continueSelect.innerHTML = '<option value="0">从头开始</option>';
    
    // 添加序号选项
    for (let i = 1; i < window.ultimateContentSequence.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        const item = window.ultimateContentSequence[i];
        const type = item.type === 'text' ? '📝' : '🖼️';
        const preview = item.type === 'text' ? 
            (item.content.substring(0, 12) + (item.content.length > 12 ? '...' : '')) : 
            '图片';
        option.textContent = `${i + 1}. ${type} ${preview}`;
        continueSelect.appendChild(option);
    }
}

/**
 * 当选择器值改变时的处理函数
 */
function updateContinueFromSelect() {
    const continueSelect = document.getElementById('continue-from-select');
    const selectedIndex = parseInt(continueSelect.value) || 0;
    const continueBtn = document.getElementById('continue-from-btn');
    
    if (selectedIndex === 0) {
        continueBtn.innerHTML = '<span class="ultimate-btn-icon">🚀</span><span>从头开始</span>';
    } else {
        const totalItems = window.ultimateContentSequence ? window.ultimateContentSequence.length : 0;
        const remainingItems = totalItems - selectedIndex;
        continueBtn.innerHTML = `<span class="ultimate-btn-icon">🎯</span><span>继续发送 (${remainingItems}项)</span>`;
    }
}
// 新增代码结束

// 新增代码开始 - Alt+0快捷键功能（修复后的版本）
// 设置全局快捷键
function setupGlobalShortcuts() {
    // 移除之前的监听器
    document.removeEventListener('keydown', handleGlobalShortcuts);
    
    // 添加新的监听器
    document.addEventListener('keydown', handleGlobalShortcuts);
    
    console.log('🎯 全局快捷键已设置：Alt+0 唤醒/关闭小太阳图文助手');
}

// 处理全局快捷键（修复后的版本，支持状态保存和恢复）
function handleGlobalShortcuts(event) {
    // Alt+0 快捷键
    if (event.altKey && event.key === '0') {
        event.preventDefault();
        event.stopPropagation();
        
        const simulator = document.getElementById('ultimate-user-simulator');
        
        if (simulator && window.ultimateSimulatorVisible) {
            // 如果存在且可见，则关闭并保存状态
            console.log('🔄 关闭助手并保存状态...');
            saveUltimateSimulatorState();
            
            simulator.style.animation = 'slideOutRightUltimate 0.3s ease-in';
            setTimeout(() => {
                simulator.remove();
                window.ultimateSimulatorVisible = false;
            }, 300);
            
            showUltimateToast('📦 小太阳图文助手已关闭，状态已保存 (Alt+0 重新唤醒)', 'info');
        } else {
            // 如果不存在或不可见，则创建/显示并恢复状态
            console.log('🔄 创建助手并恢复状态...');
            createUltimateUserSimulator();
            window.ultimateSimulatorVisible = true;
            
            if (window.ultimateSimulatorState) {
                showUltimateToast('☀️ 小太阳图文助手已唤醒！工作状态已恢复', 'success');
            } else {
                showUltimateToast('☀️ 小太阳图文助手已唤醒！', 'success');
            }
        }
    }
}
// 新增代码结束

// ========== 历史记忆系统 ========== //
// 导出历史发送配置
function exportUltimateHistory() {
    if (!window.ultimateContentSequence || window.ultimateContentSequence.length === 0) {
        showUltimateToast('⚠️ 没有内容可导出', 'warning');
        return;
    }
    // 解析相关设置
    const parseMode = document.getElementById('ultimate-parse-mode')?.value || '';
    const segmentMode = document.getElementById('ultimate-segment-mode')?.value || '';
    // 发送相关设置
    const typingSpeed = document.getElementById('ultimate-typing-speed')?.value || '';
    const sendInterval = document.getElementById('ultimate-send-interval')?.value || '';
    // 其他可扩展设置
    const historyData = {
        contentSequence: window.ultimateContentSequence,
        typingSpeed,
        sendInterval,
        parseMode,
        segmentMode,
        time: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(historyData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `小太阳图文助手历史_${new Date().toLocaleString().replace(/[ :/]/g,'_')}.json`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 100);
    showUltimateToast('📤 历史已导出为JSON', 'success');
}

// 导入历史发送配置
function importUltimateHistory() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(evt) {
            try {
                const data = JSON.parse(evt.target.result);
                if (!data.contentSequence || !Array.isArray(data.contentSequence)) {
                    showUltimateToast('❌ JSON格式不正确', 'error');
                    return;
                }
                window.ultimateContentSequence = data.contentSequence;
                updateContentEditor();
                // 恢复发送设置
                if (data.typingSpeed) {
                    document.getElementById('ultimate-typing-speed').value = data.typingSpeed;
                }
                if (data.sendInterval) {
                    document.getElementById('ultimate-send-interval').value = data.sendInterval;
                }
                // 恢复解析设置
                if (data.parseMode) {
                    document.getElementById('ultimate-parse-mode').value = data.parseMode;
                }
                if (data.segmentMode) {
                    document.getElementById('ultimate-segment-mode').value = data.segmentMode;
                }
                showUltimateToast('✅ 历史已导入，所有设置已恢复', 'success');
            } catch (err) {
                showUltimateToast('❌ 导入失败，文件格式错误', 'error');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

// 新增代码开始 - 编辑模板功能
/**
 * 编辑模板功能 - 打开可视化编辑页面
 */
function editTemplate() {
    // 初始化空模板或使用当前内容
    let templateData = [];
    if (window.ultimateContentSequence && window.ultimateContentSequence.length > 0) {
        templateData = JSON.parse(JSON.stringify(window.ultimateContentSequence));
    }
    
    const editorWindow = window.open('', '_blank', 'width=800,height=700');
    let editorHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>模板编辑器 - 小太阳图文助手精致版</title>
            <meta charset="UTF-8">
            <style>
                body { 
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
                    padding: 24px; 
                    line-height: 1.5; 
                    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                    margin: 0;
                    color: #1e293b;
                    font-size: 13px;
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 24px;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
                }
                .header h1 {
                    margin: 0 0 8px 0;
                    color: #1e293b;
                    font-size: 20px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }
                .header p {
                    color: #64748b;
                    font-size: 13px;
                    margin: 0;
                    font-weight: 500;
                }
                .toolbar {
                    background: white;
                    padding: 20px;
                    border-radius: 12px;
                    box-shadow: 0 3px 12px rgba(0,0,0,0.06);
                    margin-bottom: 20px;
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                }
                .btn {
                    padding: 8px 16px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 12px;
                    font-weight: 600;
                    transition: all 0.2s ease;
                    color: white;
                    align-items: center;
                    gap: 6px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                }
                .btn-primary { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }
                .btn-success { background: linear-gradient(135deg, #10b981, #059669); }
                .btn-warning { background: linear-gradient(135deg, #f59e0b, #d97706); }
                .btn-danger { background: linear-gradient(135deg, #ef4444, #dc2626); }
                .btn-purple { background: linear-gradient(135deg, #8b5cf6, #7c3aed); }
                .btn:hover { transform: translateY(-1px) scale(1.02); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
                
                .editor-container {
                    background: white;
                    border-radius: 12px;
                    padding: 20px;
                    box-shadow: 0 3px 12px rgba(0,0,0,0.06);
                    min-height: 300px;
                    margin-bottom: 20px;
                }
                .item { 
                    margin-bottom: 16px; 
                    padding: 16px; 
                    border-radius: 12px; 
                    background: #f8fafc;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
                    transition: all 0.2s ease;
                    position: relative;
                    border-left: 3px solid transparent;
                }
                .item:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
                .text-item { 
                    border-left-color: #3b82f6; 
                    background: linear-gradient(135deg, #eff6ff, #dbeafe);
                }
                .image-item { 
                    border-left-color: #10b981; 
                    background: linear-gradient(135deg, #f0fdf4, #dcfce7);
                }
                .item-header { 
                    font-size: 11px; 
                    font-weight: 700; 
                    margin-bottom: 8px; 
                    text-transform: uppercase;
                    letter-spacing: 0.3px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .text-item .item-header { color: #1e40af; }
                .image-item .item-header { color: #059669; }
                .item-controls {
                    display: flex;
                    gap: 6px;
                }
                .item-btn {
                    width: 24px;
                    height: 24px;
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }
                .item-btn:hover { transform: scale(1.1); }
                .btn-edit { background: #3b82f6; }
                .btn-delete { background: #ef4444; }
                .btn-up { background: #8b5cf6; }
                .btn-down { background: #8b5cf6; }
                img { 
                    max-width: 100%; 
                    height: auto; 
                    border-radius: 8px; 
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }
                .text-content {
                    font-size: 12px;
                    line-height: 1.6;
                    color: #374151;
                    white-space: pre-wrap;
                }
                .empty-state {
                    text-align: center;
                    color: #9ca3af;
                    padding: 60px 20px;
                    font-style: italic;
                }
                .save-section {
                    background: white;
                    padding: 20px;
                    border-radius: 12px;
                    box-shadow: 0 3px 12px rgba(0,0,0,0.06);
                    text-align: center;
                }
                .file-input {
                    display: none;
                }
                .textarea-edit {
                    width: 95%;
                    min-height: 120px;
                    padding: 12px;
                    border: 2px solid #e5e7eb;
                    border-radius: 8px;
                    font-size: 12px;
                    font-family: inherit;
                    resize: vertical;
                    margin-top: 8px;
                }
                .textarea-edit:focus {
                    border-color: #3b82f6;
                    outline: none;
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
                }
                .modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.5);
                    display: none;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                }
                .modal-content {
                    background: white;
                    padding: 24px;
                    border-radius: 12px;
                    max-width: 500px;
                    width: 90%;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
                }
                .modal-header {
                    font-size: 16px;
                    font-weight: 700;
                    margin-bottom: 16px;
                    color: #1e293b;
                }
                .modal-buttons {
                    display: flex;
                    gap: 10px;
                    justify-content: flex-end;
                    margin-top: 16px;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>
                    <span>📝</span>
                    模板编辑器
                </h1>
                <p>可视化编辑图文内容，并保存为JSON模板</p>
            </div>
            
            <div class="toolbar">
                <button class="btn btn-primary" onclick="addTextItem()">
                    <span>📝</span> 添加文本
                </button>
                <button class="btn btn-success" onclick="addImageItem()">
                    <span>🖼️</span> 添加图片
                </button>
                <button class="btn btn-purple" onclick="importFromJSON()">
                    <span>📥</span> 导入JSON
                </button>
                <button class="btn btn-warning" onclick="exportToJSON()">
                    <span>📤</span> 导出JSON
                </button>
                <button class="btn btn-danger" onclick="clearTemplate()">
                    <span>🗑️</span> 清空模板
                </button>
            </div>
            
            <div class="editor-container" id="editorContainer">
                <div class="empty-state" id="emptyState">
                    <div style="font-size: 48px; margin-bottom: 16px;">📝</div>
                    <div>暂无内容，点击上方按钮开始添加</div>
                </div>
            </div>
            
            <div class="save-section">
                <h3 style="margin: 0 0 12px 0; color: #1e293b;">💾 保存模板</h3>
                <p style="margin: 0 0 16px 0; color: #64748b; font-size: 12px;">
                    模板将保存为JSON格式，可在"发送历史"页签中导入使用
                </p>
                <button class="btn btn-success" onclick="saveTemplate()" style="font-size: 14px; padding: 12px 24px;">
                    <span>💾</span> 保存为JSON模板
                </button>
            </div>
            
            <!-- 文本编辑模态框 -->
            <div class="modal" id="textModal">
                <div class="modal-content">
                    <div class="modal-header">编辑文本内容</div>
                    <textarea class="textarea-edit" id="textEditor" placeholder="请输入文本内容..."></textarea>
                    <div class="modal-buttons">
                        <button class="btn btn-warning" onclick="closeModal()">取消</button>
                        <button class="btn btn-primary" onclick="saveTextEdit()">保存</button>
                    </div>
                </div>
            </div>
            
            <input type="file" class="file-input" id="imageInput" accept="image/*" onchange="handleImageUpload(event)">
            <input type="file" class="file-input" id="jsonInput" accept="application/json" onchange="handleJSONImport(event)">
            
            <script>
                let templateData = ${JSON.stringify(templateData)};
                let editingIndex = -1;
                
                function renderEditor() {
                    const container = document.getElementById('editorContainer');
                    const emptyState = document.getElementById('emptyState');
                    
                    if (templateData.length === 0) {
                        emptyState.style.display = 'block';
                        container.innerHTML = '<div class="empty-state" id="emptyState"><div style="font-size: 48px; margin-bottom: 16px;">📝</div><div>暂无内容，点击上方按钮开始添加</div></div>';
                        return;
                    }
                    
                    let html = '';
                    templateData.forEach((item, index) => {
                        if (item.type === 'text') {
                            html += \`
                                <div class="item text-item">
                                    <div class="item-header">
                                        <span>📝 文本内容 #\${index + 1}</span>
                                        <div class="item-controls">
                                            <button class="item-btn btn-up" onclick="moveItem(\${index}, -1)" title="上移" \${index === 0 ? 'disabled' : ''}>↑</button>
                                            <button class="item-btn btn-down" onclick="moveItem(\${index}, 1)" title="下移" \${index === templateData.length - 1 ? 'disabled' : ''}>↓</button>
                                            <button class="item-btn btn-edit" onclick="editTextItem(\${index})" title="编辑">✏️</button>
                                            <button class="item-btn btn-delete" onclick="deleteItem(\${index})" title="删除">×</button>
                                        </div>
                                    </div>
                                    <div class="text-content">\${item.content}</div>
                                </div>
                            \`;
                        } else if (item.type === 'image') {
                            html += \`
                                <div class="item image-item">
                                    <div class="item-header">
                                        <span>🖼️ 图片内容 #\${index + 1}</span>
                                        <div class="item-controls">
                                            <button class="item-btn btn-up" onclick="moveItem(\${index}, -1)" title="上移" \${index === 0 ? 'disabled' : ''}>↑</button>
                                            <button class="item-btn btn-down" onclick="moveItem(\${index}, 1)" title="下移" \${index === templateData.length - 1 ? 'disabled' : ''}>↓</button>
                                            <button class="item-btn btn-delete" onclick="deleteItem(\${index})" title="删除">×</button>
                                        </div>
                                    </div>
                                    <img src="\${item.content}" alt="图片预览" />
                                </div>
                            \`;
                        }
                    });
                    
                    container.innerHTML = html;
                }
                
                function addTextItem() {
                    const content = prompt('请输入文本内容:');
                    if (content && content.trim()) {
                        templateData.push({
                            type: 'text',
                            content: content.trim(),
                            id: 'template_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
                        });
                        renderEditor();
                    }
                }
                
                function addImageItem() {
                    document.getElementById('imageInput').click();
                }
                
                function handleImageUpload(event) {
                    const file = event.target.files[0];
                    if (!file) return;
                    
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        templateData.push({
                            type: 'image',
                            content: e.target.result,
                            id: 'template_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
                        });
                        renderEditor();
                    };
                    reader.readAsDataURL(file);
                }
                
                function editTextItem(index) {
                    editingIndex = index;
                    const modal = document.getElementById('textModal');
                    const editor = document.getElementById('textEditor');
                    editor.value = templateData[index].content;
                    modal.style.display = 'flex';
                    setTimeout(() => editor.focus(), 100);
                }
                
                function saveTextEdit() {
                    const editor = document.getElementById('textEditor');
                    const content = editor.value.trim();
                    if (content && editingIndex >= 0) {
                        templateData[editingIndex].content = content;
                        renderEditor();
                    }
                    closeModal();
                }
                
                function closeModal() {
                    document.getElementById('textModal').style.display = 'none';
                    editingIndex = -1;
                }
                
                function deleteItem(index) {
                    if (confirm('确定要删除这个项目吗？')) {
                        templateData.splice(index, 1);
                        renderEditor();
                    }
                }
                
                function moveItem(index, direction) {
                    const newIndex = index + direction;
                    if (newIndex >= 0 && newIndex < templateData.length) {
                        const temp = templateData[index];
                        templateData[index] = templateData[newIndex];
                        templateData[newIndex] = temp;
                        renderEditor();
                    }
                }
                
                function clearTemplate() {
                    if (confirm('确定要清空所有内容吗？此操作不可撤销。')) {
                        templateData = [];
                        // 还原页面到初始未导入json时的样子
                        var editorContainer = document.getElementById('editorContainer');
                        if (editorContainer) {
                            editorContainer.innerHTML = '<div class="empty-state" id="emptyState"><div style="font-size: 48px; margin-bottom: 16px;">📝</div><div>暂无内容，点击上方按钮开始添加</div></div>';
                        }
                        // 关闭所有弹窗
                        var modal = document.getElementById('textModal');
                        if (modal) modal.style.display = 'none';
                        // 重置编辑索引
                        editingIndex = -1;
                        // 清理localStorage
                        try {
                            localStorage.removeItem('ultimateContentSequence');
                        } catch (e) {}
                        // 强制刷新初始状态
                        setTimeout(renderEditor, 0);
                    }
                }
                
                function exportToJSON() {
                    if (templateData.length === 0) {
                        alert('模板为空，无法导出');
                        return;
                    }
                    
                    const exportData = {
                        contentSequence: templateData,
                        typingSpeed: '100',
                        sendInterval: '1000',
                        parseMode: 'manual',
                        segmentMode: 'none',
                        time: new Date().toISOString(),
                        source: 'template_editor'
                    };
                    
                    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = \`模板_\${new Date().toLocaleString().replace(/[ :/]/g,'_')}.json\`;
                    document.body.appendChild(a);
                    a.click();
                    setTimeout(() => {
                        document.body.removeChild(a);
                        URL.revokeObjectURL(url);
                    }, 100);
                    
                    alert('✅ 模板已导出为JSON文件');
                }
                
                function importFromJSON() {
                    var input = document.getElementById('jsonInput');
                    if (input) {
                        input.value = '';
                        input.click();
                    }
                }
                
                function handleJSONImport(event) {
                    const file = event.target.files[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        try {
                            let data = JSON.parse(e.target.result);
                            let arr = null;
                            // 1. 新模板格式
                            if (data && Array.isArray(data.contentSequence)) {
                                arr = data.contentSequence;
                            }
                            // 2. 极早期格式
                            else if (data && Array.isArray(data.data)) {
                                arr = data.data;
                            }
                            // 3. 直接数组
                            else if (Array.isArray(data)) {
                                arr = data;
                            }
                            // 4. 可能嵌套一层
                            else if (data && typeof data === 'object') {
                                // 查找第一个数组字段
                                for (let key in data) {
                                    if (Array.isArray(data[key])) {
                                        arr = data[key];
                                        break;
                                    }
                                }
                            }
                            // 统一校验内容项
                            if (Array.isArray(arr)) {
                                // 只要每项有 type 和 content 字段即可导入
                                let valid = arr.length === 0 || arr.every(item => item && typeof item === 'object' && 'type' in item && 'content' in item);
                                if (valid) {
                                    templateData = arr;
                                    renderEditor();
                                    alert('✅ JSON模板导入成功');
                                    return;
                                }
                            }
                            alert('❌ JSON格式不正确，无法识别内容结构');
                        } catch (err) {
                            alert('❌ JSON文件格式错误');
                        }
                    };
                    reader.readAsText(file);
                }
                
                function saveTemplate() {
                    exportToJSON();
                }
                
                // 点击模态框背景关闭
                document.getElementById('textModal').addEventListener('click', function(e) {
                    if (e.target === this) {
                        closeModal();
                    }
                });
                
                // 初始渲染
                renderEditor();
                
                // 键盘快捷键
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape') {
                        closeModal();
                    }
                });
            </script>
        </body>
        </html>
    `;
    
    if (editorWindow) {
        editorWindow.document.write(editorHTML);
        editorWindow.document.close();
        showUltimateToast('📝 模板编辑器已打开，可视化编辑图文内容', 'success');
    } else {
        showUltimateToast('❌ 无法打开编辑器，请检查浏览器弹窗设置', 'error');
    }
}
// 新增代码结束

// 在内容编辑器工具栏添加导入导出按钮（自动插入）

// 暂停序列发送
function pauseSequence() {
    window.isPaused = true;
    document.getElementById('pause-sequence-btn').style.display = 'none';
    document.getElementById('resume-sequence-btn').style.display = 'flex';
    showUltimateToast('⏸️ 序列已暂停', 'warning');
}

// 恢复序列发送
function resumeSequence() {
    window.isPaused = false;
    document.getElementById('pause-sequence-btn').style.display = 'flex';
    document.getElementById('resume-sequence-btn').style.display = 'none';
    showUltimateToast('▶️ 序列已恢复', 'info');
}

// 停止序列发送
function stopSequence() {
    window.sendingAborted = true;
    window.isSending = false;
    window.isPaused = false;
    
    // 重置界面
    document.getElementById('sending-controls').style.display = 'none';
    document.getElementById('ultimate-start-sequence').style.display = 'flex';
    document.getElementById('continue-from-controls').style.display = 'none';
    
    showUltimateToast('⏹️ 序列发送已停止', 'warning');
}

// 预览序列 - 精致版
function previewSequence() {
    if (!window.ultimateContentSequence || window.ultimateContentSequence.length === 0) {
        showUltimateToast('⚠️ 没有内容可预览', 'warning');
        return;
    }
    
    const previewWindow = window.open('', '_blank', 'width=600,height=700');
    let previewHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>发送序列预览 - 小太阳图文助手精致版</title>
            <meta charset="UTF-8">
            <style>
                body { 
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
                    padding: 24px; 
                    line-height: 1.5; 
                    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                    margin: 0;
                    color: #1e293b;
                    font-size: 13px;
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 24px;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
                }
                .header h1 {
                    margin: 0 0 8px 0;
                    color: #1e293b;
                    font-size: 20px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }
                .header p {
                    color: #64748b;
                    font-size: 13px;
                    margin: 0;
                    font-weight: 500;
                }
                .item { 
                    margin-bottom: 16px; 
                    padding: 16px; 
                    border-radius: 12px; 
                    background: white;
                    box-shadow: 0 3px 12px rgba(0,0,0,0.06);
                    transition: all 0.2s ease;
                }
                .item:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
                }
                .text-item { 
                    border-left: 3px solid #3b82f6; 
                }
                .image-item { 
                    border-left: 3px solid #10b981; 
                }
                .item-header { 
                    font-size: 10px; 
                    font-weight: 700; 
                    margin-bottom: 8px; 
                    text-transform: uppercase;
                    letter-spacing: 0.3px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    justify-content: space-between;
                }
                .text-item .item-header { color: #1e40af; }
                .image-item .item-header { color: #059669; }
                img { 
                    max-width: 100%; 
                    height: auto; 
                    border-radius: 10px; 
                    box-shadow: 0 3px 12px rgba(0,0,0,0.08);
                }
                .text-content {
                    font-size: 12px;
                    line-height: 1.6;
                    color: #374151;
                }
                .stats {
                    margin-top: 24px;
                    text-align: center;
                    color: #64748b;
                    font-size: 11px;
                    font-weight: 500;
                }
                .send-with-next {
                    border-bottom: 3px dashed #f59e0b !important;
                }
                .send-group-indicator {
                    background: linear-gradient(135deg, #f59e0b, #d97706);
                    color: white;
                    font-size: 9px;
                    font-weight: 600;
                    padding: 2px 6px;
                    border-radius: 4px;
                    letter-spacing: 0.1px;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>
                    <span>👁️</span>
                    发送序列预览
                </h1>
                <p>预览即将发送的内容序列和顺序</p>
            </div>
    `;
    
    // 新增代码开始 - 计算发送组信息
    const sendGroups = calculateSendGroups();
    let groupIndex = 0;
    // 新增代码结束
    
    window.ultimateContentSequence.forEach((item, index) => {
        // 新增代码开始 - 检查是否在发送组中
        const isInGroup = sendGroups.some(group => group.includes(index));
        const isGroupStart = sendGroups.some(group => group[0] === index && group.length > 1);
        const sendWithNextClass = item.sendWithNext ? ' send-with-next' : '';
        // 新增代码结束
        
        if (item.type === 'text') {
            previewHTML += `
                <div class="item text-item${sendWithNextClass}">
                    <div class="item-header">
                        <span>📝 文本内容 #${index + 1}</span>
                        ${item.sendWithNext ? '<span class="send-group-indicator">🔗 与下一项同时发送</span>' : ''}
                    </div>
                    <div class="text-content">${item.content}</div>
                </div>
            `;
        } else if (item.type === 'image') {
            previewHTML += `
                <div class="item image-item${sendWithNextClass}">
                    <div class="item-header">
                        <span>🖼️ 图片内容 #${index + 1}</span>
                        ${item.sendWithNext ? '<span class="send-group-indicator">🔗 与下一项同时发送</span>' : ''}
                    </div>
                    <img src="${item.content}" alt="图片预览" />
                </div>
            `;
        }
    });
    
    const textCount = window.ultimateContentSequence.filter(item => item.type === 'text').length;
    const imageCount = window.ultimateContentSequence.filter(item => item.type === 'image').length;
    
    previewHTML += `
            <div class="stats">
                <strong>📊 统计信息：</strong>
                共 ${window.ultimateContentSequence.length} 项内容 
                (📝 ${textCount} 个文本，🖼️ ${imageCount} 个图片)
                ${sendGroups.length > 0 ? `<br>🔗 ${sendGroups.length} 个同时发送组` : ''}
            </div>
        </body>
        </html>
    `;
    
    if (previewWindow) {
        previewWindow.document.write(previewHTML);
        previewWindow.document.close();
        showUltimateToast('👁️ 序列预览已打开', 'info');
    } else {
        showUltimateToast('❌ 无法打开预览窗口，请检查浏览器弹窗设置', 'error');
    }
}

// 寻找聊天输入框 - 通用版本
function findChatInputBox() {
    // 常见的聊天输入框选择器
    const selectors = [
        'textarea[placeholder*="输入"]',
        'div[contenteditable="true"]',
        'textarea',
        'input[type="text"]',
        '#chatInput',
        '.chat-input',
        '[data-testid="textbox"]'
    ];
    
    for (let selector of selectors) {
        const element = document.querySelector(selector);
        if (element && element.offsetParent !== null) {
            return element;
        }
    }
    
    console.warn('未找到聊天输入框');
    return null;
}

// 模拟打字效果发送文本 - 增强版
async function typeTextWithSpeed(element, text, speed) {
    if (!element || !text) return;
    
    // 清空输入框
    if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
        element.value = '';
        element.focus();
    } else if (element.contentEditable === 'true') {
        element.textContent = '';
        element.focus();
    }
    
    // 逐字输入
    for (let i = 0; i < text.length; i++) {
        if (window.sendingAborted) break;
        
        const char = text[i];
        
        if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
            element.value += char;
            element.dispatchEvent(new Event('input', { bubbles: true }));
        } else if (element.contentEditable === 'true') {
            element.textContent += char;
            element.dispatchEvent(new Event('input', { bubbles: true }));
        }
        
        // 滚动到底部
        element.scrollTop = element.scrollHeight;
        
        // 等待指定的打字间隔
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

// 粘贴图片到聊天框
async function pasteImageToChat(element, imageDataUrl) {
    if (!element || !imageDataUrl) return;
    
    try {
        // 将base64转换为blob
        const response = await fetch(imageDataUrl);
        const blob = await response.blob();
        
        // 创建剪贴板项
        const clipboardItem = new ClipboardItem({ [blob.type]: blob });
        await navigator.clipboard.write([clipboardItem]);
        
        // 聚焦输入框并触发粘贴
        element.focus();
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // 模拟粘贴操作
        element.dispatchEvent(new Event('paste', { bubbles: true }));
        
        await new Promise(resolve => setTimeout(resolve, 200));
        
    } catch (error) {
        console.error('图片粘贴失败:', error);
        showUltimateToast('⚠️ 图片粘贴可能失败，请手动处理', 'warning');
    }
}

// 发送消息
async function sendMessage(element) {
    if (!element) return;
    
    // 查找发送按钮
    const sendSelectors = [
        'button[type="submit"]',
        'button:contains("发送")',
        'button:contains("Send")',
        '[data-testid="send-button"]',
        '.send-button',
        'button[title*="发送"]'
    ];
    
    let sendButton = null;
    for (let selector of sendSelectors) {
        sendButton = document.querySelector(selector);
        if (sendButton && sendButton.offsetParent !== null) break;
    }
    
    if (sendButton) {
        sendButton.click();
    } else {
        // 尝试键盘发送
        element.focus();
        element.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            keyCode: 13,
            which: 13,
            bubbles: true
        }));
    }
    
    await new Promise(resolve => setTimeout(resolve, 300));
}

// 显示通知消息 - 精致版
function showUltimateToast(message, type = 'info') {
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    
    const colors = {
        success: 'linear-gradient(135deg, #10b981, #059669)',
        error: 'linear-gradient(135deg, #ef4444, #dc2626)',
        warning: 'linear-gradient(135deg, #f59e0b, #d97706)',
        info: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
    };
    
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 12px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        z-index: 10001;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 12px;
        font-weight: 600;
        max-width: 320px;
        animation: slideInRightUltimate 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        letter-spacing: 0.2px;
        display: flex;
        align-items: center;
        gap: 8px;
    `;
    
    toast.innerHTML = `
        <span style="font-size: 14px;">${icons[type]}</span>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        if (toast.parentNode) {
            toast.style.animation = 'slideOutRightUltimate 0.3s ease-in';
            setTimeout(() => toast.remove(), 300);
        }
    }, 3500);
}

// 生成唯一ID
function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// 修复模态框向右位移bug的代码

function makeDraggableUltimateSimple(element, handle) {
    let isDragging = false;
    let offsetX, offsetY;
    
    handle.addEventListener('mousedown', startDrag);
    handle.addEventListener('touchstart', startDrag, { passive: false });
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag, { passive: false });
    
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
    
    function startDrag(e) {
        isDragging = true;
        
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        
        // 获取当前元素的实际位置（考虑transform）
        const rect = element.getBoundingClientRect();
        
        // 修复位移bug：清除transform并重新设置位置
        if (element.style.transform && element.style.transform.includes('translateX')) {
            const computedStyle = window.getComputedStyle(element);
            const currentLeft = rect.left;
            const currentTop = rect.top;
            
            // 清除transform
            element.style.transform = 'none';
            element.style.left = currentLeft + 'px';
            element.style.top = currentTop + 'px';
        }
        
        // 重新获取清除transform后的位置
        const newRect = element.getBoundingClientRect();
        offsetX = clientX - newRect.left;
        offsetY = clientY - newRect.top;
        
        element.style.cursor = 'grabbing';
        element.style.userSelect = 'none';
        element.style.transition = 'none';
        element.style.zIndex = '1000000';
        
        // 添加拖拽视觉效果
        element.style.transform = 'scale(1.02)';
        element.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
        
        e.preventDefault();
    }
    
    function drag(e) {
        if (!isDragging) return;
        
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        
        const newX = clientX - offsetX;
        const newY = clientY - offsetY;
        
        // 边界检测，保持在视窗内
        const maxX = window.innerWidth - element.offsetWidth;
        const maxY = window.innerHeight - element.offsetHeight;
        
        const boundedX = Math.max(0, Math.min(newX, maxX));
        const boundedY = Math.max(0, Math.min(newY, maxY));
        
        element.style.left = boundedX + 'px';
        element.style.top = boundedY + 'px';
        
        e.preventDefault();
    }
    
    function stopDrag() {
        if (!isDragging) return;
        
        isDragging = false;
        element.style.cursor = 'default';
        element.style.userSelect = '';
        element.style.zIndex = '999999';
        element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // 恢复正常样式
        element.style.transform = 'none';
        element.style.boxShadow = '0 20px 40px -8px rgba(0, 0, 0, 0.15), 0 8px 25px -5px rgba(0, 0, 0, 0.08)';
    }
}

// 自动启动并设置快捷键
(function() {
    // 启动小太阳图文助手
    createUltimateUserSimulator();
    console.log('☀️ 小太阳图文助手精致版已创建！');
    console.log('💡 按 Alt+0 可以快速唤醒/关闭小太阳图文助手');
    // 设置全局快捷键
    setupGlobalShortcuts();
    // 显示启动通知
    setTimeout(() => {
        showUltimateToast('☀️ 小太阳图文助手精致版已启动！按 Alt+0 可唤醒/关闭', 'success');
    }, 1000);
})();
