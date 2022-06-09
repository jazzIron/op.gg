import { ErrorPage } from '@src/pages/error/ErrorPage';
import { ReactNode, Component, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // 다음 렌더링 폴백 UI가 보이도록 상태를 업데이트
    console.error('error catch ui', error);
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('error catch', error);
    console.error('Uncaught error:', error, errorInfo);
  }

  public componentWillUnmount() {}

  public render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
