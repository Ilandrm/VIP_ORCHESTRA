export const useBodyScrollLock = () => {
  const lock = () => {
    if (import.meta.client) {
      document.body.style.overflowY = 'hidden'
    }
  }

  const unlock = () => {
    if (import.meta.client) {
      document.body.style.overflowY = ''
    }
  }

  return { lock, unlock }
}
