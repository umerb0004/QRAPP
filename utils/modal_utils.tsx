let _currentGlobalLoader: any = null
export function registerModal(ref: React.Ref<string>) {
  _currentGlobalLoader = ref
}
