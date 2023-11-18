document.addEventListener('DOMContentLoaded', function () {
    const socialMedia = {
      emil: [
        {
          platform: 'behance',
          link: 'https://behance.net/emildost',
          custom_icon: ''
        },
        {
          platform: 'dribbble',
          link: 'https://dribbble.com/emildost',
          custom_icon: ''
        },
        {
          platform: 'linkedin',
          link: 'https://www.linkedin.com/in/emildost',
          custom_icon: ''
        },
        {
          platform: 'instagram',
          link: 'https://www.instagram.com/emilldost/',
          custom_icon: ''
        },
        {
          platform: 'telegram',
          link: 'https://t.me/emildost',
          custom_icon: ''
        },
        {
          platform: 'whatsapp',
          link: 'https://wa.me/+994702270557',
          custom_icon: ''
        },
        {
          platform: 'bio-link',
          link: 'https://emildost.bio.link',
          custom_icon: 'fa-internet-explorer'
        },
      ],
      dost: [
        {
          platform: 'behance',
          link: 'https://behance.net/dost-studio',
          custom_icon: ''
        },
        {
          platform: 'linkedin',
          link: 'https://www.linkedin.com/company/dost-studio/',
          custom_icon: ''
        },
        {
          platform: 'instagram',
          link: 'https://instagram.com/doststudio_',
          custom_icon: ''
        },
        {
          platform: 'whatsapp',
          link: 'https://wa.me/+994702270557',
          custom_icon: ''
        },
      ]
    };
    const profilePics = {
      emil: '/frontend/images/logo/emilDostProfile.jpg',
      dost: '/frontend/images/logo/dostStudioLogo.png'
    };
    const descriptions = {
      emil: "I’m Graphic & UX/UI Designer! Let's determine the right position for your brand together and mark it brightly!",
      dost: "As a creative team specialising in digital designs, we aim to take your brand to the next level. We are here to turn your vision into reality."
    };
    function addSocialMediaLinks() {
      Object.keys(socialMedia).forEach(person => {
        const container = document.getElementById(`${person}-social`);
        socialMedia[person].forEach(media => {
          const iconClass = media.custom_icon ? media.custom_icon : `fa-${media.platform}`;
          const anchor = `<a href="${media.link}" class="text-xl"><i class="fa-brands ${iconClass}"></i></a>`;
          container.innerHTML += anchor;
        });
      });
    }
    function addProfilePics() {
      Object.keys(profilePics).forEach(person => {
        const imgElement = document.getElementById(`${person}-profile-pic`);
        const picUrl = profilePics[person] || '../images/logo/defaultProfile.jpg';
        imgElement.src = picUrl;
      });
    }
    function addDescriptions() {
      Object.keys(descriptions).forEach(person => {
        const descElement = document.getElementById(`${person}-description`);
        descElement.textContent = descriptions[person];
      });
    }
    addSocialMediaLinks();
    addProfilePics();
    addDescriptions();
  });
  function equalizeHeights() {
    const emilDescription = document.getElementById('emil-description');
    const dostDescription = document.getElementById('dost-description');
    emilDescription.style.height = '';
    dostDescription.style.height = '';
    if (emilDescription && dostDescription) {
      const heightEmil = emilDescription.offsetHeight;
      const heightDost = dostDescription.offsetHeight;
      const maxHeight = Math.max(heightEmil, heightDost);
      emilDescription.style.height = `${maxHeight}px`;
      dostDescription.style.height = `${maxHeight}px`;
      emilDescription.style.overflow = 'auto';
      dostDescription.style.overflow = 'auto';
    }
  }
  document.addEventListener('DOMContentLoaded', equalizeHeights);
  window.addEventListener('resize', equalizeHeights);
