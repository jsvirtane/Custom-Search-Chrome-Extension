chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "search_all",
    title: 'Etsi kaikista luetteloista: "%s"',
    contexts: ["selection"],
  })
})

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "MP_search",
    title: 'Etsi Moto-Profilin luettelosta: "%s"',
    contexts: ["selection"],
  })
})

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "Kaha_search",
    title: 'Etsi Autoluettelosta luettelosta: "%s"',
    contexts: ["selection"],
  })
})

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "MP_VIN_search",
    title: 'VIN-haku Moto-Profil: "%s"',
    contexts: ["selection"],
  })
})

chrome.contextMenus.onClicked.addListener(function (search, tab) {
  switch (search.menuItemId) {
    case "MP_search":
      chrome.tabs.create({
        url: `https://katalog.profiauto.net/artykuly/szukaj?s=${search.selectionText}`,
        index: tab.index + 1
      })
      break
    case "Kaha_search":
      chrome.tabs.create({
        url: `https://www.autoluettelo.fi/wls/regno_search.do?country=FI&regNo=&freetext=${search.selectionText}`,
        index: tab.index + 1,
      })
      break
    case "MP_VIN_search":
      chrome.tabs.create({
        url: `https://katalog.profiauto.net/vin/SzukajVin?s=${search.selectionText}`,
        index: tab.index + 1,
      })
      break
    default:
      chrome.tabs.create({
        url: `https://katalog.profiauto.net/artykuly/szukaj?s=${search.selectionText}`,
        index: tab.index + 1,
      })
      chrome.tabs.create({
        url: `https://www.autoluettelo.fi/wls/regno_search.do?country=FI&regNo=&freetext=${search.selectionText}`,
        index: tab.index + 1,
      })
  }
})
