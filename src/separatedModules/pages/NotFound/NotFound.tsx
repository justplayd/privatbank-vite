import {StyledNotFoundPage} from "./style";

export const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <div className={'notfound'}>
        <div className={'notfound__box'}>
          <div className={'notfound__code'}>404</div>

          <div className={'notfound__line'}></div>

          <div className={'notfound__text'}>
            <div className={'notfound__title'}>Something went wrong</div>
            <div className={'notfound__descr'}>
              Please check your connection and <a href={'/'}>Try again</a>
            </div>
          </div>
        </div>
      </div>
    </StyledNotFoundPage>
  );
};
