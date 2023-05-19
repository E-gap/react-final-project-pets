//import css from './PaginationComponent.module.css';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { useEffect, useState } from 'react';

const PaginationComponent = ({ items, searchPage }) => {
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const container = document.getElementById('tui-pagination-container');

    const options = {
      totalItems: 0,
      itemsPerPage: 12,
      visiblePages: 5,
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

    const pagination = new Pagination(container, options);
    pagination.reset(items.length);
    let currentPage = pagination.getCurrentPage();

    setPageNumber(currentPage);

    pagination.on('afterMove', event => {
      currentPage = event.page;
      setPageNumber(currentPage);
    });
  }, [items.length]);

  useEffect(() => {
    searchPage(pageNumber);
  }, [searchPage, pageNumber]);

  /* let pagination;

  if (container) {
    //console.log(items);
    pagination = new Pagination(container, options);

    pagination.reset(items.length);
    //setPage(pagination.getCurrentPage());
    console.log(page);
  }  */

  return <div id="tui-pagination-container" className="tui-pagination"></div>;
};
export default PaginationComponent;
