import { styled } from '@mui/material/styles';

export const StyledNotFoundPage = styled('div')(() => `
  .notfound {
    display: flex;
    align-items: center;
    min-height: 100vh;
    padding: 24px;
  
    &__box {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex: 0 1 100%;
      justify-content: center;
    }
  
    &__line {
      width: 1px;
      background: #1F2937;
      margin: 0 32px;
      align-self: stretch;
    }
  
    &__code {
      color: #1F2937;
      font-size: 64px;
      line-height: 1;
      letter-spacing: -1.28px;
      font-weight: 300;
    }

  
    &__title {
      color: #1F2937;
      font-size: 28px;
      font-weight: 600;
      line-height: 1.3;
      margin-bottom: 24px;
    }
  
    &__descr,
    &__descr a {
      color: #1F2937;
      font-size: 16px;
      line-height: 1.3;
    }
  
    &__descr a {
      font-weight: 500;
      letter-spacing: 0.32px;
      color: #9E28B5;
    }
  }
`);
