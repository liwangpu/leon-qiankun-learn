import { Injectable } from '@angular/core';
import { addGlobalUncaughtErrorHandler, loadMicroApp, registerMicroApps, start } from 'qiankun';

/**
 * 路由监听
 * @param {*} routerPrefix 前缀
 */
function genActiveRule(routerPrefix) {
    // hash 路由设置
    return (location) => location.hash.startsWith(routerPrefix);
    // 普通路由设置
    // return (location) => location.pathname.startsWith(routerPrefix);
}

@Injectable({
    providedIn: 'root'
})
export class MicroappStoreService {

    public loadedApps = new Set<string>();
    private subAppViewport: HTMLElement;
    public constructor(
    ) { }

    public start(): void {
        this.subAppViewport = document.getElementById('subapp-viewport');
        // const childrenPath = ['/app1', '/app2'];
        registerMicroApps(
            [
                {
                    name: 'app1', // app name registered
                    entry: '//localhost:9002',
                    container: '#subapp-viewport',
                    activeRule: '/app1',
                },
                {
                    name: 'app2', // app name registered
                    entry: '//localhost:9003',
                    container: '#subapp-viewport',
                    activeRule: '/app2',
                }
            ],
            {

                // qiankun 生命周期钩子 - 加载前
                beforeLoad: (app: any) => {
                    // 加载子应用前，加载进度条
                    //   NProgress.start();
                    console.log('before load', app.name);
                    return Promise.resolve();
                },
                // qiankun 生命周期钩子 - 挂载后
                afterMount: (app: any) => {
                    // 加载子应用前，进度条加载完成
                    //   NProgress.done();
                    console.log('after mount', app.name);
                    this.toggleViewPortVisible(true);
                    return Promise.resolve();
                },
                afterUnmount: (app: any) => {
                    console.log('after unmount', app?.name);
                    this.toggleViewPortVisible(false);
                    return Promise.resolve();
                }
            },
        );

        /**
        * 添加全局的未捕获异常处理器
        */
        addGlobalUncaughtErrorHandler((event: Event | string) => {
            console.error(event);
            const { message: msg } = event as any;
            // 加载失败时提示
            if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
                console.error("微应用加载失败，请检查应用是否可运行");
            }
        });

        start();
    }

    public toggleViewPortVisible(visible: boolean): void {
        if (visible) {
            this.subAppViewport.classList.remove('hidden');
        } else {
            this.subAppViewport.classList.add('hidden');
        }
    }
}
