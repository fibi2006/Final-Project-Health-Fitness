const form = document.getElementById('trainerForm');
    const successMessage = document.getElementById('successMessage');
    const backBtn = document.getElementById('backBtn');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // إخفاء الفورم
        document.querySelector(".contact-form form").style.display = "none";

        // إظهار الرسالة
        successMessage.style.display = "block";

        // تشغيل الأنيميشن
        setTimeout(() => {
            successMessage.classList.add("show");
        }, 50);

        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });


    // زر العودة لعرض الفورم
    backBtn.addEventListener('click', () => {
        successMessage.classList.remove("show");

        setTimeout(() => {
            successMessage.style.display = "none";
            document.querySelector(".contact-form form").style.display = "block";
        }, 300);
    });