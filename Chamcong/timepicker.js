(function () {
  document.querySelectorAll('input[type="time"]').forEach(function (inp) {
    var wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:6px';
    function mk(opts) {
      var s = document.createElement('select');
      s.style.cssText = 'flex:1;min-width:0;padding-left:8px;padding-right:4px';
      s.innerHTML = '<option value="">--</option>' + opts.map(function (o) {
        return '<option value="' + o[0] + '">' + o[1] + '</option>';
      }).join('');
      wrap.appendChild(s);
      return s;
    }
    var pad = function (n) { return String(n).padStart(2, '0'); };
    var hh = mk(Array.from({ length: 12 }, function (_, i) { return [i + 1, i + 1]; }));
    var mm = mk(Array.from({ length: 60 }, function (_, i) { return [i, pad(i)]; }));
    var ap = mk([['AM', 'AM'], ['PM', 'PM']]);
    ap.firstChild.remove(); // AM/PM không có dòng trống
    if (inp.id) { hh.setAttribute('aria-label', 'Giờ'); mm.setAttribute('aria-label', 'Phút'); ap.setAttribute('aria-label', 'AM/PM'); }

    inp.style.display = 'none';
    inp.parentNode.insertBefore(wrap, inp);

    Object.defineProperty(inp, 'value', {
      get: function () {
        if (hh.value === '' || mm.value === '') return '';
        var h = Number(hh.value) % 12 + (ap.value === 'PM' ? 12 : 0);
        return pad(h) + ':' + pad(Number(mm.value));
      },
      set: function (v) {
        var m = /^(\d{1,2}):(\d{2})/.exec(v || '');
        if (!m) { hh.value = ''; mm.value = ''; ap.value = 'AM'; return; }
        var h = Number(m[1]);
        ap.value = h >= 12 ? 'PM' : 'AM';
        hh.value = String(h % 12 === 0 ? 12 : h % 12);
        mm.value = String(Number(m[2]));
      }
    });
  });
})();