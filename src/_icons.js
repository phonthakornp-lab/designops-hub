<script>
/* ชุดไอคอนเส้น 24x24 — inline ทั้งหมด ไม่พึ่ง CDN */
var I = (function () {
  function s(inner) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + '</svg>';
  }
  return {
    home:      s('<path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V20h13V9.5"/><path d="M9.5 20v-6h5v6"/>'),
    palette:   s('<path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.8 0-1.5-1.4-1.8-1.4-3 0-1 .8-1.7 1.9-1.7H17a4 4 0 0 0 4-4c0-4.1-4-7.5-9-7.5Z"/><circle cx="8" cy="9" r="1.1" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.1" fill="currentColor" stroke="none"/><circle cx="7" cy="13.5" r="1.1" fill="currentColor" stroke="none"/>'),
    check:     s('<circle cx="11" cy="11" r="7.5"/><path d="m8.3 11.2 2 2 4.4-4.6"/><path d="m16.6 16.6 4 4"/>'),
    send:      s('<path d="M4 12h9"/><path d="M4 7.5h6"/><path d="M4 16.5h6"/><path d="m14.5 7 5 5-5 5"/>'),
    user:      s('<circle cx="12" cy="8.5" r="3.6"/><path d="M5 20c.6-3.6 3.5-5.6 7-5.6s6.4 2 7 5.6"/>'),
    type:      s('<path d="M4.5 6.5V5h15v1.5"/><path d="M12 5v14"/><path d="M9 19h6"/>'),
    ruler:     s('<rect x="3.6" y="3.6" width="7.2" height="7.2" rx="1.7"/><rect x="13.2" y="3.6" width="7.2" height="7.2" rx="1.7"/><rect x="3.6" y="13.2" width="7.2" height="7.2" rx="1.7"/><rect x="13.2" y="13.2" width="7.2" height="7.2" rx="1.7"/>'),
    badge:     s('<path d="M12 3.2l2.3 1.6 2.8-.2.9 2.7 2.2 1.7-1 2.6 1 2.6-2.2 1.7-.9 2.7-2.8-.2L12 20.8l-2.3-1.6-2.8.2-.9-2.7L3.8 15l1-2.6-1-2.6L6 8.1l.9-2.7 2.8.2Z"/><path d="m9.4 12.2 1.8 1.8 3.4-3.7"/>'),
    layers:    s('<path d="m12 3.5 8.5 4.3L12 12 3.5 7.8Z"/><path d="m4.6 12 7.4 3.7 7.4-3.7"/><path d="m4.6 16.2 7.4 3.7 7.4-3.7"/>'),
    box:       s('<path d="M20.5 8.2v7.6L12 20.4 3.5 15.8V8.2L12 3.6Z"/><path d="m3.5 8.2 8.5 4.6 8.5-4.6"/><path d="M12 12.8v7.6"/>'),
    book:      s('<path d="M12 6.6c-1.7-1.4-4-2-6.4-1.7-.8.1-1.4.8-1.4 1.6v9.8c0 .9.8 1.6 1.7 1.5 2.1-.3 4.1.2 6.1 1.6"/><path d="M12 6.6c1.7-1.4 4-2 6.4-1.7.8.1 1.4.8 1.4 1.6v9.8c0 .9-.8 1.6-1.7 1.5-2.1-.3-4.1.2-6.1 1.6"/><path d="M12 6.6v12.8"/>'),
    frame:     s('<rect x="4.4" y="4.4" width="15.2" height="15.2" rx="2"/><path d="M8.6 4.4v15.2M15.4 4.4v15.2M4.4 8.6h15.2M4.4 15.4h15.2"/>'),
    table:     s('<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><path d="M3.5 9.5h17M3.5 14.5h17M9.5 9.5v10"/>'),
    tag:       s('<path d="M13.4 3.6H20V10l-8.6 8.6a2 2 0 0 1-2.8 0l-3.8-3.8a2 2 0 0 1 0-2.8Z"/><circle cx="16.4" cy="7.2" r="1.2" fill="currentColor" stroke="none"/>'),
    chart:     s('<path d="M4 19.5h16"/><path d="M6.5 16V11M11 16V6.5M15.5 16v-6.5M20 16v-9"/>'),
    doc:       s('<path d="M13.6 3.6H7a1.6 1.6 0 0 0-1.6 1.6v13.6A1.6 1.6 0 0 0 7 20.4h10a1.6 1.6 0 0 0 1.6-1.6V8.6Z"/><path d="M13.6 3.6v5h5"/><path d="M8.8 13h6.4M8.8 16.4h4.4"/>'),
    folder:    s('<path d="M3.6 6.6c0-.9.7-1.6 1.6-1.6h3.5l2 2.4h8.1c.9 0 1.6.7 1.6 1.6v8.4c0 .9-.7 1.6-1.6 1.6H5.2c-.9 0-1.6-.7-1.6-1.6Z"/>'),
    wrench:    s('<path d="M15.2 6.4a3.8 3.8 0 0 1 5.2 4.9l-2.2-2.2-2.4.6-.6-2.4Z"/><path d="M14.6 9.4 5.2 18.8"/><path d="m4.4 15.6 4 4"/>'),
    clip:      s('<rect x="6.4" y="4.6" width="11.2" height="15.8" rx="2"/><path d="M9.6 4.6V3.4h4.8v1.2"/><path d="m9.8 12.4 1.6 1.6 3-3.4"/>'),
    target:    s('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>')
  };
})();
