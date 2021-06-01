module.exports = [
    '<a href="/docs/<%= id %>" name="<%= id %>" class="anchor">',
    '  <span class="anchor-target" id=<%= id %>"></span>',
    '  <span class="anchor glyphicon glyphicon-link"></span>',
    '</a>'
].join('\n');
