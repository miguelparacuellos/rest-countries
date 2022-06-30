// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      input?: string;
      background: string;
      elements: string;
    };
  }
}
