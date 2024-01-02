import colorPalette from './colorPalette'

// Déclaration des couleurs globales du site internet
const global = {
  background: {
    default: colorPalette.secondary.white[500],
    highlight: colorPalette.secondary.white[50],
    transparent: {
      white: {
        lighter: `rgba(245, 245, 245, 0.2)`,
        default: `rgba(245, 245, 245, 0.5)`,
        stronger: `rgba(245, 245, 245, 0.7)`
      },
      black: {
        default: `rgba(32, 33, 36, 0.3)`,
        stronger: `rgba(32, 33, 36, 0.5)`
      }
    }
  },
  text: {
    default: colorPalette.secondary.black[500],
    accent: colorPalette.primary.blue[500],
    subdued: {
      default: colorPalette.secondary.black[300],
      accent: colorPalette.secondary.black[400]
    },
    data: {
      label: colorPalette.secondary.black[300],
      content: colorPalette.secondary.black[500]
    },
    details: {
      default: colorPalette.secondary.black[300],
      accent: colorPalette.primary.blue[500]
    },
    title: {
      section: colorPalette.primary.blue[300],
      regular: {
        default: colorPalette.secondary.black[500],
        accent: {
          default: colorPalette.primary.yellow[500],
          alternate: colorPalette.primary.blue[500]
        }
      }
    }
  },
  icon: {
    default: colorPalette.secondary.black[500],
    accent: colorPalette.primary.blue[500],
    title: colorPalette.secondary.black[500],
    help: colorPalette.secondary.black[500]
  },
  support: {
    icon: {
      attachment: colorPalette.primary.blue[500],
      unreadMailNotifications: colorPalette.tertiary.red[500]
    }
  },
  misc: {
    breadcrumbs: {
      chevron: colorPalette.secondary.black[500],
      text: {
        current: colorPalette.primary.blue[500],
        previous: {
          hover: colorPalette.primary.blue[300],
          default: colorPalette.secondary.black[300]
        }
      }
    },
    divider: {
      default: colorPalette.secondary.black[50],
      stronger: colorPalette.secondary.black[200]
    },
    paging: {
      current: colorPalette.secondary.black[500],
      notCurrent: colorPalette.secondary.black[100],
      icon: colorPalette.secondary.black[100]
    },
    profilPic: {
      border: {
        hover: colorPalette.primary.blue[500]
      },
      background: {
        placeholder: colorPalette.primary.blue[50]
      },
      content: {
        initial: colorPalette.primary.blue[300],
        hover: colorPalette.primary.blue[500]
      },
      icon: {
        initial: colorPalette.secondary.white[500],
        hover: colorPalette.secondary.white[50]
      }
    },
    scrollbar: {
      background: colorPalette.secondary.black[100],
      cursor: colorPalette.secondary.black[300]
    },
    sectionDivider: {
      label: colorPalette.primary.blue[500],
      divider: {
        solid: colorPalette.primary.blue[500],
        subdued: colorPalette.primary.blue[100]
      }
    },
    sliderTracker: {
      current: colorPalette.secondary.black[500],
      notCurrent: colorPalette.secondary.black[100]
    },
    status: {
      background: {
        info: colorPalette.primary.blue[50],
        success: colorPalette.tertiary.green[50],
        warning: colorPalette.tertiary.orange[50],
        danger: colorPalette.tertiary.red[50],
        archived: colorPalette.secondary.black[50]
      },
      content: {
        info: colorPalette.primary.blue[500],
        success: colorPalette.tertiary.green[500],
        warning: colorPalette.tertiary.orange[500],
        danger: colorPalette.tertiary.red[500],
        archived: colorPalette.secondary.black[200]
      }
    },
    step: {
      background: {
        current: `linear-gradient(0deg, rgba(207, 227, 232, 0.50) 0%, rgba(207, 227, 232, 0.50) 100%), #FCFCFC`
      },
      content: {
        current: colorPalette.primary.blue[500],
        finished: colorPalette.tertiary.green[500],
        remaining: colorPalette.secondary.black[300]
      },
      progressBar: {
        current: {
          done: colorPalette.primary.blue[500],
          remaining: colorPalette.primary.blue[200]
        },
        finished: colorPalette.tertiary.green[500],
        remaining: colorPalette.secondary.black[200]
      }
    },
    tag: {
      background: {
        plan: {
          free: colorPalette.secondary.black[50],
          pro: colorPalette.primary.blue[50],
          proPlus: colorPalette.secondary.purple[50]
        },
        request: {
          bugReport: colorPalette.primary.blue[50],
          techSupport: colorPalette.tertiary.orange[50],
          service: colorPalette.tertiary.red[50],
          paperwork: colorPalette.secondary.purple[50]
        },
        status: {
          info: colorPalette.primary.blue[50],
          success: colorPalette.tertiary.green[50],
          warning: colorPalette.tertiary.orange[50],
          error: colorPalette.tertiary.red[50]
        }
      },
      content: {
        plan: {
          free: colorPalette.secondary.black[300],
          pro: colorPalette.primary.blue[500],
          proPlus: colorPalette.secondary.purple[500]
        },
        request: {
          bugReport: colorPalette.primary.blue[500],
          techSupport: colorPalette.tertiary.orange[500],
          service: colorPalette.tertiary.red[500],
          paperwork: colorPalette.secondary.purple[500]
        },
        status: {
          info: colorPalette.primary.blue[500],
          success: colorPalette.tertiary.green[500],
          warning: colorPalette.tertiary.orange[500],
          error: colorPalette.tertiary.red[500]
        }
      }
    },
    website: {
      featurePresentation: {
        progressBar: {
          previous: colorPalette.primary.blue[200],
          current: colorPalette.primary.blue[500],
          next: colorPalette.primary.blue[200]
        },
        step: {
          previous: colorPalette.primary.blue[200],
          current: colorPalette.primary.blue[500],
          next: colorPalette.primary.blue[200],
          circling: {
            background: colorPalette.secondary.white[500],
            border: colorPalette.primary.blue[500]
          }
        }
      },
      nav: {
        link: {
          underline: colorPalette.primary.yellow[500],
          tracker: {
            border: colorPalette.primary.yellow[500],
            background: colorPalette.primary.yellow[50]
          },
          icon: {
            default: colorPalette.secondary.black[500],
            externalLink: colorPalette.primary.blue[500]
          },
          text: {
            main: colorPalette.secondary.black[500],
            sub: colorPalette.secondary.black[300],
            external: colorPalette.primary.blue[500]
          }
        }
      },
      plan: {
        border: {
          planHighlight: colorPalette.primary.blue[500], //Couleur du contour de l'offre mise en avant "La plus populaire"
          planFeaturesList: colorPalette.primary.blue[500] //Couleur du contour autour de l'icône "tick" du résumé des fonctions dispo dans l'offre (homepage/page produit)
        },
        features: {
          icon: {
            included: colorPalette.primary.blue[500], //Couleur de l'icône "tick" dans la page "offres" correspondant à une fonction inclue dans l'offre
            notIncluded: colorPalette.secondary.black[100] //Couleur de l'icône "tick" dans la page "offres" correspondant à une fonction non inclue dans l'offre
          },
          mobile: {
            notIncluded: colorPalette.secondary.black[200],
            included: {
              default: colorPalette.secondary.black[400],
              details: colorPalette.primary.blue[500]
            }
          }
        }
      }
    }
  }
}

// Déclaration des couleurs spécifiques aux composants fonctionnels
const cta = {
  primary: {
    background: {
      main: {
        initial: colorPalette.primary.yellow[500],
        hover: colorPalette.primary.yellow[300]
      },
      secondary: {
        initial: colorPalette.primary.blue[500],
        hover: colorPalette.primary.blue[700]
      },
      black: {
        initial: colorPalette.secondary.black[500],
        hover: colorPalette.secondary.black[300]
      },
      white: {
        initial: colorPalette.secondary.white[500],
        hover: colorPalette.primary.yellow[300]
      },
      green: {
        initial: colorPalette.tertiary.green[500],
        hover: colorPalette.tertiary.green[700]
      },
      orange: {
        initial: colorPalette.tertiary.orange[500],
        hover: colorPalette.tertiary.orange[600]
      },
      red: {
        initial: colorPalette.tertiary.red[500],
        hover: colorPalette.tertiary.red[300]
      },
      disabled: {
        default: colorPalette.secondary.black[50],
        alternative: colorPalette.secondary.black[300]
      }
    },
    content: {
      main: {
        initial: colorPalette.secondary.black[500],
        hover: colorPalette.secondary.black[500]
      },
      secondary: {
        initial: colorPalette.secondary.white[500],
        hover: colorPalette.secondary.white[500]
      },
      black: {
        initial: colorPalette.secondary.white[500],
        hover: colorPalette.secondary.white[500]
      },
      white: {
        initial: colorPalette.secondary.black[500],
        hover: colorPalette.secondary.black[500]
      },
      green: {
        initial: colorPalette.secondary.white[500],
        hover: colorPalette.secondary.white[500]
      },
      orange: {
        initial: colorPalette.secondary.white[500],
        hover: colorPalette.secondary.white[500]
      },
      red: {
        initial: colorPalette.secondary.white[500],
        hover: colorPalette.secondary.white[500]
      },
      disabled: {
        default: colorPalette.secondary.black[300],
        alternative: colorPalette.secondary.black[500]
      }
    }
  },
  secondary: {
    background: {
      main: {
        hover: colorPalette.primary.yellow[300]
      },
      secondary: {
        hover: colorPalette.primary.blue[700]
      },
      black: {
        hover: colorPalette.secondary.black[300]
      },
      white: {
        hover: colorPalette.secondary.white[50]
      },
      green: {
        hover: colorPalette.tertiary.green[700]
      },
      orange: {
        hover: colorPalette.tertiary.orange[600]
      },
      red: {
        hover: colorPalette.tertiary.red[300]
      }
    },
    border: {
      main: {
        initial: colorPalette.primary.yellow[500],
        hover: colorPalette.primary.yellow[300]
      },
      secondary: {
        initial: colorPalette.primary.blue[500],
        hover: colorPalette.primary.blue[700]
      },
      black: {
        initial: colorPalette.secondary.black[500],
        hover: colorPalette.secondary.black[300]
      },
      white: {
        initial: colorPalette.secondary.white[500],
        hover: colorPalette.secondary.white[50]
      },
      green: {
        initial: colorPalette.tertiary.green[500],
        hover: colorPalette.tertiary.green[700]
      },
      orange: {
        initial: colorPalette.tertiary.orange[500],
        hover: colorPalette.tertiary.orange[600]
      },
      red: {
        initial: colorPalette.tertiary.red[500],
        hover: colorPalette.tertiary.red[300]
      },
      disabled: {
        default: colorPalette.secondary.black[200]
      }
    },
    content: {
      main: {
        initial: colorPalette.primary.yellow[500],
        hover: colorPalette.secondary.black[500]
      },
      secondary: {
        initial: colorPalette.primary.blue[500],
        hover: colorPalette.secondary.white[500]
      },
      black: {
        initial: colorPalette.secondary.black[500],
        hover: colorPalette.secondary.white[500]
      },
      white: {
        initial: colorPalette.secondary.white[500],
        hover: colorPalette.secondary.black[500]
      },
      green: {
        initial: colorPalette.tertiary.green[500],
        hover: colorPalette.secondary.white[500]
      },
      orange: {
        initial: colorPalette.tertiary.orange[500],
        hover: colorPalette.secondary.white[500]
      },
      red: {
        initial: colorPalette.tertiary.red[500],
        hover: colorPalette.secondary.white[500]
      },
      disabled: {
        default: colorPalette.secondary.black[200]
      }
    }
  },
  tertiary: {
    content: {
      main: {
        initial: colorPalette.primary.yellow[500],
        hover: colorPalette.primary.yellow[300]
      },
      secondary: {
        initial: colorPalette.primary.blue[500],
        hover: colorPalette.primary.blue[700]
      },
      black: {
        initial: colorPalette.secondary.black[300],
        hover: colorPalette.secondary.black[500]
      },
      white: {
        initial: colorPalette.secondary.white[500],
        hover: colorPalette.primary.yellow[300]
      },
      green: {
        initial: colorPalette.tertiary.green[500],
        hover: colorPalette.tertiary.green[700]
      },
      orange: {
        initial: colorPalette.tertiary.orange[500],
        hover: colorPalette.tertiary.orange[600]
      },
      red: {
        initial: colorPalette.tertiary.red[500],
        hover: colorPalette.tertiary.red[300]
      },
      disabled: {
        default: colorPalette.secondary.black[200]
      }
    }
  }
}

const iconAction = {
  background: {
    hover: {
      default: colorPalette.primary.blue[50],
      accent: colorPalette.primary.yellow[50],
      accentAlt: colorPalette.primary.blue[50],
      success: colorPalette.tertiary.green[50],
      destructive: colorPalette.tertiary.red[50],
      white: global.background.transparent.white.default
    }
  },
  icon: {
    initial: {
      default: colorPalette.secondary.black[500],
      accent: colorPalette.primary.yellow[500],
      accentAlt: colorPalette.primary.blue[500],
      success: colorPalette.tertiary.green[500],
      destructive: colorPalette.tertiary.red[500],
      white: colorPalette.secondary.white[50]
    },
    hover: {
      default: colorPalette.primary.blue[500],
      accent: colorPalette.primary.yellow[500],
      accentAlt: colorPalette.primary.blue[500],
      success: colorPalette.tertiary.green[500],
      destructive: colorPalette.tertiary.red[500],
      white: colorPalette.secondary.white[50]
    },
    disabled: {
      default: colorPalette.primary.blue[200],
      accent: colorPalette.primary.yellow[200],
      accentAlt: colorPalette.primary.blue[200],
      success: colorPalette.tertiary.green[200],
      destructive: colorPalette.tertiary.red[200],
      white: colorPalette.secondary.white[500]
    }
  }
}

const input = {
  background: {
    active: colorPalette.secondary.white[50],
    disabled: colorPalette.secondary.black[50],
    dropdownOption: {
      initial: colorPalette.secondary.white[50],
      hover: colorPalette.primary.blue[50],
      disabled: colorPalette.secondary.black[50]
    },
    fileUpload: {
      initial: colorPalette.primary.blue[50],
      hover: colorPalette.primary.blue[100],
      uploaded: colorPalette.secondary.white[50],
      fileType: colorPalette.primary.blue[500]
    }
  },
  border: {
    hover: colorPalette.primary.blue[200],
    selected: colorPalette.primary.blue[500],
    error: colorPalette.tertiary.red[500],
    locked: colorPalette.secondary.black[100],
    fileUpload: {
      hover: colorPalette.primary.blue[500]
    }
  },
  icon: {
    label: {
      default: colorPalette.secondary.black[500],
      help: {
        initial: colorPalette.secondary.black[500],
        hover: colorPalette.secondary.black[300]
      }
    },
    dropdownOption: {
      current: colorPalette.primary.blue[500]
    },
    fileUpload: {
      fileType: colorPalette.secondary.white[50],
      placeholder: colorPalette.primary.blue[500]
    }
  },
  text: {
    content: colorPalette.secondary.black[500], //Couleur du texte saisi dans l'input
    error: colorPalette.tertiary.red[500], //Couleur du texte explicatif d'erreur
    label: colorPalette.secondary.black[500], //Couleur de l'intitulé (label) de l'input
    placeholder: {
      active: colorPalette.secondary.black[100], //Couleur du texte de remplacement quand l'input est actif
      disabled: colorPalette.secondary.black[300] //Couleur du texte de remplacement quand l'input est désactivé
    },
    dropdownOption: {
      default: colorPalette.secondary.black[500], //Couleur d'une option disponible d'un menu déroulant
      current: colorPalette.primary.blue[500], //Couleur de l'option actuellement sélectionnée d'un menu déroulant
      disabled: colorPalette.secondary.black[300] //Couleur d'une option indisponible d'un menu déroulant
    },
    fileUpload: {
      fileName: colorPalette.secondary.black[500],
      fileSize: colorPalette.secondary.black[300],
      placeholder: colorPalette.primary.blue[500]
    }
  }
}

const selector = {
  item: {
    background: {
      default: colorPalette.secondary.white[50],
      hover: colorPalette.primary.blue[50],
      selected: colorPalette.secondary.white[50],
      disabled: {
        default: colorPalette.secondary.black[50],
        selected: colorPalette.secondary.black[50]
      }
    },
    border: {
      hover: colorPalette.primary.blue[500],
      disbled: colorPalette.secondary.black[200]
    },
    content: {
      default: colorPalette.secondary.black[500],
      hover: colorPalette.primary.blue[500],
      selected: colorPalette.primary.blue[500],
      disabled: colorPalette.secondary.black[300]
    }
  },
  switch: {
    background: {
      default: colorPalette.secondary.white[50],
      disabled: colorPalette.secondary.black[50],
      tracker: {
        main: colorPalette.primary.yellow[500],
        secondary: colorPalette.primary.blue[500],
        disabled: colorPalette.secondary.black[200]
      }
    },
    option: {
      background: {
        hover: {
          main: colorPalette.primary.yellow[50],
          secondary: colorPalette.primary.blue[50]
        }
      },
      content: {
        initial: colorPalette.secondary.black[300],
        hover: {
          main: colorPalette.secondary.black[500],
          secondary: colorPalette.primary.blue[500]
        },
        selected: {
          main: colorPalette.secondary.black[500],
          secondary: colorPalette.secondary.white[500]
        }
      }
    }
  },
  checkbox: {
    background: {
      checked: {
        main: colorPalette.primary.yellow[500],
        secondary: colorPalette.primary.blue[500],
        white: colorPalette.secondary.white[50]
      },
      disabled: {
        unchecked: {
          main: colorPalette.primary.yellow[50],
          secondary: colorPalette.primary.blue[50],
          white: colorPalette.secondary.white[500]
        },
        checked: {
          main: colorPalette.primary.yellow[500],
          secondary: colorPalette.primary.blue[500],
          white: colorPalette.secondary.white[50]
        }
      }
    },
    border: {
      main: colorPalette.primary.yellow[500],
      secondary: colorPalette.primary.blue[500],
      white: colorPalette.secondary.white[50]
    },
    ticked: {
      main: colorPalette.secondary.white[50],
      secondary: colorPalette.secondary.white[50],
      white: colorPalette.secondary.black[500]
    }
  },
  radio: {
    background: {
      disabled: {
        main: colorPalette.primary.yellow[50],
        secondary: colorPalette.primary.blue[50],
        white: colorPalette.secondary.white[500]
      },
      border: {
        main: colorPalette.primary.yellow[500],
        secondary: colorPalette.primary.blue[500],
        white: colorPalette.secondary.white[50]
      },
      circle: {
        main: colorPalette.primary.yellow[500],
        secondary: colorPalette.primary.blue[500],
        white: colorPalette.secondary.white[50]
      }
    }
  },
  toggle: {
    background: {
      checked: {
        main: colorPalette.primary.yellow[500],
        secondary: colorPalette.primary.blue[500],
        white: colorPalette.secondary.white[50]
      },
      unchecked: {
        main: colorPalette.primary.yellow[50],
        secondary: colorPalette.primary.blue[50],
        white: colorPalette.secondary.white[500]
      }
    },
    circle: {
      checked: {
        main: colorPalette.primary.yellow[500],
        secondary: colorPalette.primary.blue[500],
        white: colorPalette.secondary.white[50]
      },
      unchecked: {
        main: colorPalette.secondary.white[50],
        secondary: colorPalette.secondary.white[50],
        white: colorPalette.primary.yellow[500]
      }
    }
  }
}

const support = {
  request: {
    background: {
      unreadNotification: colorPalette.tertiary.red[500]
    },
    icon: {
      unreadNotification: colorPalette.secondary.white[500]
    },
    status: {
      ongoing: colorPalette.tertiary.orange[500],
      solved: colorPalette.tertiary.green[500]
    }
  },
  message: {
    border: {
      attachment: colorPalette.primary.blue[100], //Couleur utilisée pour l'icône de statut de lecture & le nom du destinataire d'un message non lu
      hover: colorPalette.primary.blue[100],
      selected: colorPalette.primary.blue[500]
    },
    icon: {
      message: {
        unread: colorPalette.primary.blue[500], //Couleur utilisée pour l'icône de statut de lecture & le nom du destinataire d'un message non lu
        read: colorPalette.primary.blue[300] //Couleur utilisée pour l'icône de statut de lecture & le nom du destinataire d'un message lu
      },
      attachment: {
        fileType: colorPalette.primary.blue[500], //Couleur utilisée pour l'icône du type de fichier d'une pièce jointe dans un message
        tag: colorPalette.secondary.black[500] //Couleur utilisée pour l'icône indiquant la présence d'une pièce jointe dans un message
      }
    }
  }
}

// Regroupement des couleurs dans un array global pour export
const colors = {
  global,
  cta,
  iconAction,
  input,
  selector,
  support
}

export default colors
