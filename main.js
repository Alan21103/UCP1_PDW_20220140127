
document.addEventListener("DOMContentLoaded", function() {
    // Mengambil elemen tombol sebelum dan sesudah
    var prevButton = document.querySelector(".carousel-control-prev");
    var nextButton = document.querySelector(".carousel-control-next");

    // Menambahkan event listener untuk tombol sebelumnya
    prevButton.addEventListener("click", function() {
        var activeItem = document.querySelector(".carousel-item.active");
        var prevItem = activeItem.previousElementSibling || activeItem.parentElement.lastElementChild;
        activeItem.classList.remove("active");
        prevItem.classList.add("active");
    });

    // Menambahkan event listener untuk tombol berikutnya
    nextButton.addEventListener("click", function() {
        var activeItem = document.querySelector(".carousel-item.active");
        var nextItem = activeItem.nextElementSibling || activeItem.parentElement.firstElementChild;
        activeItem.classList.remove("active");
        nextItem.classList.add("active");
    });
});

// Menginisialisasi carousel
var myCarousel = document.getElementById('carouselExampleFade');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000, // Mengatur interval auto slide dalam milidetik (misalnya, 3000 = 3 detik)
  wrap: true // Mengatur agar carousel berulang ketika mencapai akhir
});

$(document).ready(function(){
    // Update greeting
    updateGreeting();
    // Update datetime every second
    setInterval(updateDateTime, 1000);
  });
  
  function updateGreeting() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var greeting;
  
    if (currentHour < 12) {
      greeting = ' Pagi,';
    } else if (currentHour < 18) {
      greeting = ' Siang,';
    } else {
      greeting = ' Malam,';
    }
  
    $('#greeting').text(greeting);
  }
  
  function updateDateTime() {
    var currentTime = new Date();
    var formattedDate = formatDate(currentTime);
    var formattedTime = formatTime(currentTime);
  
    $('#currentDateTime').text(formattedDate + ' ' + formattedTime);
  }
  
  function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
  
    return day + '/' + month + '/' + year;
  }
  
  function formatTime(date) {
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
  
    hour = (hour < 10 ? '0' : '') + hour;
    minute = (minute < 10 ? '0' : '') + minute;
    second = (second < 10 ? '0' : '') + second;
  
    return hour + ':' + minute + ':' + second;
  }


  document.addEventListener('DOMContentLoaded', function() {
    // Menambahkan event listener ke tombol "Tentang"
    document.querySelector('a[href="#daftarfilm"]').addEventListener('click', function(e) {
      e.preventDefault(); // Mencegah tindakan default dari link
      // Mendapatkan elemen "Tentang" berdasarkan ID
      const tentangSection = document.getElementById('daftar-film');
      // Menggulirkan halaman ke bagian "about" dengan efek smooth
      tentangSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Menambahkan event listener ke tombol "Tentang"
    document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
      e.preventDefault(); // Mencegah tindakan default dari link
      // Mendapatkan elemen "Tentang" berdasarkan ID
      const tentangSection = document.getElementById('home');
      // Menggulirkan halaman ke bagian "home" dengan efek smooth
      tentangSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Menambahkan event listener ke tombol "Tentang"
    document.querySelector('a[href="#langganan"]').addEventListener('click', function(e) {
      e.preventDefault(); // Mencegah tindakan default dari link
      // Mendapatkan elemen "Tentang" berdasarkan ID
      const tentangSection = document.getElementById('langganan');
      // Menggulirkan halaman ke bagian "video" dengan efek smooth
      tentangSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
