import winax from 'winax';

const fso = new ActiveXObject("Scripting.FileSystemObject");
const f = fso.openTextFile("output.txt", 2, true);
f.WriteLine(`Hello World ${new Date().toISOString()}`);
f.close();

winax.release(fso);

