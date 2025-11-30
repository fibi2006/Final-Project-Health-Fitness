// اختار كل الأزرار في الصفحة
const rewardButtons = document.querySelectorAll(".reward-card .btn");

rewardButtons.forEach((btn, index) => 
{
    const rewardId = 'reward-${index + 1}';
    const progressId = 'progress-${index + 1}';

    // لو مفيش بيانات في localStorage، نعملها
    if (!localStorage.getItem(rewardId)) {
        localStorage.setItem(rewardId, JSON.stringify({ claimed: false }));
    }
    if (!localStorage.getItem(progressId)) {
        localStorage.setItem(progressId, 0); // افتراضياً 0% لو مفيش بيانات
    }

    // نقرأ البيانات من localStorage
    const rewardData = JSON.parse(localStorage.getItem(rewardId));
    const progress = parseInt(localStorage.getItem(progressId));

    // تحديث الزرار حسب حالة المكافأة و progress
    if (rewardData.claimed) {
        btn.textContent = "Reward Claimed";
        btn.disabled = true;
        btn.style.opacity = 0.6;
        btn.style.cursor = "not-allowed";
    } else if (progress < 100) {
        btn.disabled = true;
        btn.style.opacity = 0.6;
        btn.style.cursor = "not-allowed";
    }

    // لما المستخدم يضغط الزرار
    btn.addEventListener("click", () => {
        const updatedData = {
            claimed: true
        };
        localStorage.setItem(rewardId, JSON.stringify(updatedData));

        btn.textContent = "Reward Claimed";
        btn.disabled = true;
        btn.style.opacity = 0.6;
        btn.style.cursor = "not-allowed";

    });
});
const hamburger = document.querySelector('.hamburger');
const mainNavLinks = document.querySelector('.mainNav');

hamburger.addEventListener('click', () => {
    mainNavLinks.classList.toggle('active');
});