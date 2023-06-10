declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module "*.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}