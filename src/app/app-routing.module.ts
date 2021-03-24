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
      description: '«Технокарта» – это бесплатный онлайн-сервис поиска спецтехники в аренду.' +
        'Наша цель - упростить, и сделать более удобными процессы организации строительства. Присоединяйтесь к нам.' +
        '  Если вы владелец крупного парка техники, или всего лишь одного трактора, крана или самосвала, и желаете' +
        'сдать свою технику в аренду, откройте здесь представительство своего автопарка. Регистрация простая и быстрая.' +
        'Заказчики легко найдут вас по геолокации и параметрам. Ваш контакт состоится' +
        'без лишних прокладок и совершенно бесплатно!',
      keywords: 'спецтехника, аренда спецтехники, кран аренда, эксковатор аренда, фронтальный погрузчик'
    }
  },
  {
    path: 'contacts', component: ContactsComponent, data: {
      title: 'Контакты',
      description: '«Технокарта» – бесплатный онлайн-сервис поиска спецтехники в аренду.' +
        'Страница обратной связи.',
      keywords: 'спецтехника, аренда спецтехники, кран аренда, эксковатор аренда, фронтальный погрузчик'
    }
  },
  {
    path: '', component: HomeComponent,
    data: {
      title: '"Технокарта" - бесплатный онлайн-сервис поиска спецтехники в аренду',
      description: '«Технокарта» – бесплатный онлайн-сервис поиска спецтехники в аренду. ' +
        'Желаете сдать свою технику в аренду? Откройте представительство своего автопарка. Заказчики ' +
        'легко найдут вас по геолокации и параметрам. Ваш контакт состоится без лишних прокладок и совершенно бесплатно!',
      keywords: 'спецтехника, аренда, специализированная техника, трактор, самосвал аренда, миксер, шаланда, фура, грузовик, пиканиска'
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
