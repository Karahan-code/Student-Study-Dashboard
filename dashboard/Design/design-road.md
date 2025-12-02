Used Figma in Design

https://www.figma.com/make/9JEIba0G1Mj9xEGDIUncoY/Dashboard-Design-Specifications?node-id=0-1&p=f&t=DfrZ1XmQVsy6BU5O-0


    Version 2 - 19.11.2025

Maked dashboard and added login register screens.

    Version 3 - 20.11.2025

Bildirim Merkezi,"Çalışma seansı hatırlatıcıları, arkadaş istekleri, ve tekrar hatırlatıcılarının toplandığı tek bir alan."
Header/Üst Bar,Mobile-First Tasarım,"Dashboard'un sadece masaüstünde değil, telefon ve tabletlerde de mükemmel çalışmasını sağlayan tam mobil uyumlu arayüz.",Genel Tasarım
İçe/Dışa Aktarma (Export),Deneme netlerini veya çalışma raporlarını kolayca PDF veya CSV olarak dışa aktarabilme yeteneği.,Raporlar/Ayarlar
Özellik,Açıklama,Geliştirilebilecek Bölüm
Ortak Çalışma Grupları,Öğrencilerin belirli dersler veya konular için özel çalışma grupları oluşturabilmesi. Bu gruplarda not paylaşımı yapılabilir.,Arkadaşlarım / Yeni Bölüm: Gruplar
Arkadaş Net Karşılaştırması (Gizli),"Öğrencinin izin verdiği arkadaşlarıyla anonimleştirilmiş net ortalamalarını karşılaştırması (Kişisel netler değil, ortalamalar).",Arkadaşlarım ve Deneme Analizi
Not Paylaşım Platformu,Öğrencilerin kendilerinin oluşturduğu veya organize ettiği ders notlarını güvenli bir şekilde paylaşabilmesi.,Notlar & Ajanda


    Version 3 - 02.12.2025
    
    TR
**1. Navigasyon (Sidebar) İyileştirmesi:**
* **Exclusive Accordion Yapısı:** Menüde dikey taşmayı (scrollbar) önlemek için "Tekil Açılır Menü" mantığına geçildi. Bir kategori (Örn: Akademik) açıldığında, açık olan diğer kategori otomatik olarak kapanır.
* **Gruplandırma:** Menü öğeleri Akademik, Sosyal ve Planlama başlıkları altında toplandı.

**2. Profil Sayfası (Steam UI Entegrasyonu):**
* **Salt Okunur Vitrin (Showcase):** Profil sayfası, düzenleme butonlarından arındırılarak tam bir "Oyuncu Profili" vitrinine dönüştürüldü. (Düzenleme işlemleri Ayarlar menüsüne taşındı).
* **Ders Kütüphanesi:** Tamamlanan dersler, Steam oyun kütüphanesi formatında listeleniyor (Örn: "Matematik - 142 Saat Kayıtta").
* **Başarılar & Arkadaşlar:** Rozetler ve arkadaş listesi (Online durumu ile) profile entegre edildi.

**3. Ana Sayfa (Dashboard) Düzeni:**
* **Bento Grid Yapısı:** Ana sayfa, veri yoğunluğunu artırmak için ızgara (grid) yapısına geçirildi.
* **Sadeleştirme:** Pomodoro sayacı ve Müzik çalar ana sayfadan kaldırılarak sadece analiz verilerine (Net Grafiği, Isı Haritası) odaklanıldı.

**4. Yeni Modül: Çalışma Odası (Focus Room):**
* **Odaklanma Alanı:** Ana sayfadan kaldırılan Pomodoro ve Ambience/Spotify araçları için dikkat dağıtıcı unsurlardan arındırılmış, izole bir sayfa oluşturuldu.

    ENG

**1. Navigation (Sidebar) Refinement:**
* **Exclusive Accordion Logic:** Implemented a single-expand behavior. Clicking a menu group automatically collapses others to prevent vertical overflow and eliminate scrollbars.
* **Categorization:** Menu items are strictly grouped under Academic, Social, and Planning headers.

**2. Profile Page (Steam UI Integration):**
* **Read-Only Showcase:** Transformed the profile into a "Gamer Style" showcase, moving all edit functionalities to the Settings menu.
* **Subject Library:** Subjects are displayed in a "Steam Library" list format (e.g., "Math - 142 Hours on Record").
* **Achievements & Social:** Integrated gamification badges and a live friends list (with status dots) directly into the profile view.

**3. Dashboard Layout:**
* **Bento Grid System:** Adopted a bento-style grid to maximize data visibility at a glance.
* **De-cluttering:** Removed actionable widgets (Pomodoro, Music) from the Dashboard to focus purely on analytics (Net Score Trend, Heatmap).

**4. New Module: Focus Room:**
* **Distraction-Free Zone:** Created a dedicated, immersive page specifically for the Pomodoro Timer and Lofi/Ambience tools, separated from the main analytics dashboard.