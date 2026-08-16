# DesignOps Hub — SkillLane UX/UI

ศูนย์รวมวิธีทำงานของ DesignOps และทางเข้าไปยังเอกสารต้นฉบับ

**เว็บ:** https://phonthakornp-lab.github.io/designops-hub/

## หลักการ

เว็บนี้ **ไม่เก็บเนื้อหา** — ทุกการ์ดลิงก์ไปยังต้นฉบับที่ของอยู่จริง (Confluence · design-brain · Figma)
เพื่อไม่ให้เกิดสำเนาที่เก่าโดยไม่มีใครรู้ · ทุกรายการระบุวันที่อัปเดตล่าสุดไว้

> ลิงก์ภายในบริษัทต้อง login ถึงจะเปิดได้

## แก้ไข

ไฟล์ที่ deploy คือ `index.html` (ไฟล์เดียว ฝังฟอนต์ในตัว) — สร้างจาก `src/`

```bash
cd src && python3 build.py   # → hub.html
cp hub.html ../index.html
```

- `src/_data.js` — เนื้อหาทั้งหมด (หมวด · การ์ด · ลิงก์)
- `src/_logic.js` — การแสดงผลและ routing
- `src/_head.html` — ธีม (ชุดเดียวกับ DesignOps Roadmap 2026)
