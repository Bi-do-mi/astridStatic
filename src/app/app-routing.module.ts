import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './components/about/about.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'about', component: AboutComponent, data: {
      title: 'О сервисе "Технокарта"',
      keywords: 'спецтехника, аренда спецтехники, кран аренда, эксковатор аренда, фронтальный погрузчик'
    }
  },
  {path: 'contacts', component: ContactsComponent, data: {title: 'Обратная связь'}},
  {
    path: '', component: HomeComponent,
    data: {
      title: '"Технокарта" - бесплатный онлайн-сервис поиска спецтехники в аренду',
      description: '«Технокарта» – бесплатный онлайн-сервис поиска спецтехники в аренду. ' +
        'Желаете сдать свою технику в аренду? Откройте представительство своего автопарка. Заказчики ' +
        'легко найдут вас по геолокации и параметрам. Ваш контакт состоится без лишних прокладок и совершенно бесплатно!',
      keywords: 'спецтехника, аренда спецтехники, кран аренда, эксковатор аренда, фронтальный погрузчик'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ]
})
export class AppRoutingModule {
}