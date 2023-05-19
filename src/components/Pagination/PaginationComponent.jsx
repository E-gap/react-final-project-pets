//import css from './PaginationComponent.module.css';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { totalPets } from '../../redux/selectors';

const PaginationComponent = ({ items, searchPage }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const total = useSelector(totalPets);

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
    pagination.reset(total);
    let currentPage = pagination.getCurrentPage();

    setPageNumber(currentPage);

    pagination.on('afterMove', event => {
      currentPage = event.page;
      setPageNumber(currentPage);
    });
  }, [total]);

  useEffect(() => {
    searchPage(pageNumber);
  }, [searchPage, pageNumber]);

  return <div id="tui-pagination-container" className="tui-pagination"></div>;
};
export default PaginationComponent;
