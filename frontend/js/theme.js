function updateThemeBasedOnTime() {
    const now = new Date();
    const hours = now.getUTCHours() + 4; // For Azerbaijan
    function applyNightTheme() {
      document.querySelectorAll('.dark-mode-dark-text.text-dark').forEach(el =>>
        el.classList.remove('text-dark');
        el.classList.add('text-white');
      });
      document.querySelectorAll('.dark-mode-white-text.text-white').forEach(el >
        el.classList.remove('text-white');
        el.classList.add('text-black');
      });
      document.body.classList.remove('bg-[#f5f5f5]');
      document.body.classList.add('bg-[#161616]');
      document.querySelectorAll('.bg-black-white.bg-black').forEach(el => {
        el.classList.remove('bg-black');
        el.classList.add('bg-white');
      });
      document.querySelectorAll('.border-dark-mode.border-black').forEach(el =>>
        el.classList.remove('border-black');
        el.classList.add('border-white');
      });
    }
    function applyDayTheme() {
      document.querySelectorAll('.dark-mode-dark-text.text-white').forEach(el =>
        el.classList.remove('text-white');
        el.classList.add('text-dark');
      });
      document.querySelectorAll('.dark-mode-dark-text.text-black').forEach(el =>
        el.classList.remove('text-black');
        el.classList.add('text-white');
      });
      document.body.classList.remove('bg-[#161616]');
      document.body.classList.add('bg-[#f5f5f5]');
      document.querySelectorAll('.bg-black-white.bg-white').forEach(el => {
        el.classList.remove('bg-white');
        el.classList.add('bg-black');
      });
      document.querySelectorAll('.border-dark-mode.border-white').forEach(el =>>
        el.classList.remove('border-white');
        el.classList.add('border-black');
      });
    }
    if (hours >= 18 || hours < 6) {
      applyNightTheme();
    } else if (hours >= 6 && hours < 18) {
      applyDayTheme();
    }
  }
  document.addEventListener('DOMContentLoaded', updateThemeBasedOnTime);
  setInterval(updateThemeBasedOnTime, 3600000);
