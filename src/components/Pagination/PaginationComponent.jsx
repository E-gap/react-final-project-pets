//import css from './PaginationComponent.module.css';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const PaginationComponent = ({ items }) => {
  const container = document.getElementById('tui-pagination-container');

  const options = {
    totalItems: 10,
    itemsPerPage: 1,
    visiblePages: 10,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  if (container) {
    //console.log(items);
    const pagination = new Pagination(container, options);

    pagination.reset(items.length);

    //console.log(pagination);
    //console.log(container);
  }

  return <div id="tui-pagination-container" className="tui-pagination"></div>;
};
export default PaginationComponent;
