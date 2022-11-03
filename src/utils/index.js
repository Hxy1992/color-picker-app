import { appWindow, LogicalPosition } from '@tauri-apps/api/window';

const size = await appWindow.outerSize();
/**
 * 设置窗口位置
 * @param {*} hide 是否隐藏窗口
 * @returns Promise
 */
export function setWindowPosition(hide = false) {
    return new Promise(async resolve => {
        const screenWidth = window.screen.width
        const screenHeight = window.screen.height
        if (hide) {
        await appWindow.setPosition(new LogicalPosition(screenWidth + size.width, screenHeight + size.height))
        } else {
        await appWindow.setPosition(new LogicalPosition(screenWidth - size.width, screenHeight - size.height))
        }
        resolve()
    })
}
  