import {BrowserModule} from '@angular/platform-browser';
/* BrowserModule, 浏览器解析模块 */
import {NgModule} from '@angular/core';
/*  核心模块 */
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
/* 数据请求模块 */
/* 自定义模块 */


import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {NewsComponent} from './components/news/news.component';
import {HomeComponent} from './components/home/home.component';
import {TodulistComponent} from './components/todulist/todulist.component';
import {FooterComponent} from './components/footer/footer.component';
import {StorageService} from './services/storage.service';
import {CartComponent} from './components/cart/cart.component';
import {ProductComponent} from './components/product/product.component';
import {Routes, RouterModule} from '@angular/router';


/* @NgModule装饰器将AppModule标记为Angular模块类(也叫NgModule类)
 @NgModule接受一个元数据对象, 告诉Angular如何编译和启动应用 */

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
    /*{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }*/
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    FooterComponent,
    TodulistComponent,
    HeaderComponent,
    NewsComponent,
    HomeComponent
  ], /* 引入当前项目运行的组件, 自定义组件�,�需要引入并且在这个里面配置 */
  imports: [/*  当前项目依赖那些模块 */
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StorageService], /*  自定义的服务 放在这个里面 */
  bootstrap: [AppComponent] /*  引导 默认启动那个组件 */
})

/* 根模块不需要导出任何东西, 因为其他组件不需要导入根模块. 但是一定要写 */
export class AppModule {
}
