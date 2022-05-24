import React from 'react'
import './Base.css'
export default function Base() {
  return (
    <div className='default'>
      <div className="title1">
        <h1>История французских революций</h1>
        <p>Основные события, случившиеся во Франции с 1789 по 1875 год: революции, реставрации, перевороты, восстания, войны и прочие потрясения</p>
      </div>
      <div className="main1">
        <h2>Ситуация накануне революции</h2>
        <p> <img src="https://cdn-s-static.arzamas.academy/uploads/ckeditor/pictures/3826/content_01.jpg"  alt="castle" />В 1787 году во Франции начался экономический спад, постепенно перешедший в кризис: производство падало, французский рынок наводнили более дешевые английские товары; к этому добавлялись неурожаи и природные бедствия, приводившие к гибели посевов и виноградников. Кроме того, Франция очень много потратила на неудачные войны и поддержку американской революции. Доходов не хватало (к 1788 году расходы превышали доходы на 20 %), и казна брала займы, проценты по которым были для нее неподъемными. Единственным способом увеличить поступления в казну было лишить налоговых привилегий первое и второе сословия </p>
      </div>
      <div className="table">
        <table border="black"><thead><tr><th>Дата</th><th>Событие</th><th>Итоги и значение</th></tr></thead><tbody><tr class="alt"><td>14 июля 1789</td><td>Взятие Бастилии</td><td>Революция началась, и, вспыхнув в Париже, она в течение  нескольких недель охватила всю Францию.</td></tr><tr><td>4-5 августа 1789</td><td>Издание декретов об уничтожение сеньориальных привилегий</td><td>Были отменены все феодальные повинности крестьян перед землевладельцами-дворянами</td></tr><tr class="alt"><td>26 августа 1789</td><td>Издана «Декларация прав человека и гражданина»</td><td>Декларация уравняла всех граждан Франции в правах и заложила основы нового правового государства</td></tr><tr><td>5-6 октября 1789</td><td>Поход на Версаль</td><td>Короля вынудили переехать в Париж, также туда перебралось Учредительное собрание</td></tr><tr class="alt"><td>20-22 июня 1791</td><td>Вареннский кризис (бегство в Варенн)</td><td>Попытка короля Людовика XVI сбежать из Парижа к своим сторонникам-роялистам. Она провалилась и была воспринята, как измена. Началась радикализация революции.</td></tr><tr><td>Сентябрь 1791</td><td>Принятие конституции. Самороспуск Учредительного собрания.</td><td>Во Франции была установлена конституционная монархия.</td></tr><tr class="alt"><td>20 апреля 1792</td><td>Объявление войны Австрии</td><td>Франция потерпела поражение в ходе этой революционной войны, что вызвало в ней мощный патриотический подъём.</td></tr><tr><td>10 августа 1792</td><td>Восстание в Париже</td><td>Королевский дворец взят штурмом, король низложен и арестован вместе со всей семьёй.</td></tr><tr class="alt"><td>21 января 1793</td><td>Казнь короля Людовика XVI</td><td>Это событие Великой французской революции ещё больше настроило монархические страны Европы против Франции, которая фактически попала в изоляцию.</td></tr><tr><td>Июнь 1793</td><td>Установление диктатуры Якобинцев</td><td>Принятие новой конституции. Начало эпохи террора.</td></tr><tr class="alt"><td>27 июля 1794</td><td>Термидорианский переворот</td><td>Свержение якобинской диктатуры и казнь её виднейших лидеров.</td></tr><tr><td>1795</td><td>Появление Директории</td><td>Принятие новой конституции. Формирование нового правительства – Директории.</td></tr><tr class="alt"><td>1796-1799</td><td>Военные походы Наполеона</td><td>Успешные завоевания генерала Наполеона Бонапарта сделали его одним из самых популярных людей в стране.</td></tr><tr><td>9-10 ноября 1799</td><td>Военный переворот</td><td>Наполеон упраздняет Директорию и создаёт Консулат, новое временное правительство. Сам он стал одним из трёх консулов.</td></tr></tbody></table>
      </div>
    </div>
  )
}