console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/secujava/java.io.PipedReader.java.html" 
 , "texte" : "File secujava/java.io.PipedReader.java 71 rule violations " 
 , "fic2"  : "./qc/secujava/java.io.PipedReader.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Reader"
 , "c2" : "java.io.PipedReader"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "java.io.PipedReader" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#81"
 , "c1" : "PipedReader"
 , "c2" : "PipedReader(PipedWriter)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#97"
 , "c1" : "PipedReader"
 , "c2" : "PipedReader(PipedWriter;int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00110"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#110"
 , "c1" : "PipedReader"
 , "c2" : "PipedReader()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00126"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#126"
 , "c1" : "PipedReader"
 , "c2" : "PipedReader(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00130"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#130"
 , "c1" : "void"
 , "c2" : "initPipe(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00160"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#160"
 , "c1" : "void"
 , "c2" : "connect(PipedWriter)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00168"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#168"
 , "c1" : "void"
 , "c2" : "receive(int)"
 , "c3" : "10"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00204"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#204"
 , "c1" : "void"
 , "c2" : "receive(char[];int;int)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00214"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#214"
 , "c1" : "void"
 , "c2" : "receivedLast()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00233"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#233"
 , "c1" : "int"
 , "c2" : "read()"
 , "c3" : "11"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00290"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#290"
 , "c1" : "int"
 , "c2" : "read(char[];int;int)"
 , "c3" : "13"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00336"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#336"
 , "c1" : "boolean"
 , "c2" : "ready()"
 , "c3" : "8"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00358"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#358"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/secujava/java.io.PipedReader.java.png" 

 , "ligneplantuml" : "./qc/secujava/java.io.PipedReader.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "56"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00130] For method initPipe arguments int  pipeSize"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method java.io.PipedReader.initPipe@POLYN199329 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method java.io.PipedReader.initPipe@POLYN199329 the MagicNumber/String  'Pipe size &amp;lt;= 0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#160"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00160] For method connect arguments PipedWriter  src"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#160"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00160] The argument src is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#168"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00168] Lock statement on synchronized method receive"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#168"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00168] For method receive arguments int  c"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00186] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method java.io.PipedReader.receive@POLYN200481 the MagicNumber/String  'Pipe not connected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method java.io.PipedReader.receive@POLYN200481 the MagicNumber/String  'Pipe closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method java.io.PipedReader.receive@POLYN200481 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method java.io.PipedReader.receive@POLYN200481 the MagicNumber/String  'Read end dead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method java.io.PipedReader.receive@POLYN200481 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method java.io.PipedReader.receive@POLYN200481 the MagicNumber/String  'Pipe broken' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method java.io.PipedReader.receive@POLYN200481 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method java.io.PipedReader.receive@POLYN200481 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method java.io.PipedReader.receive@POLYN200481 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method java.io.PipedReader.receive@POLYN200481 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method java.io.PipedReader.receive@POLYN200481 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#204"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00204] Lock statement on synchronized method receive"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#204"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00204] For method receive arguments char[]  c|int  off|int  len"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method java.io.PipedReader.receive@POLYN202159 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#214"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00214] Lock statement on synchronized method receivedLast"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method java.io.PipedReader.receivedLast@POLYN202540 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#233"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00233] Lock statement on synchronized method read"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00257] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method java.io.PipedReader.read@POLYN203209 the MagicNumber/String  'Pipe not connected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method java.io.PipedReader.read@POLYN203209 the MagicNumber/String  'Pipe closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method java.io.PipedReader.read@POLYN203209 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00239"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method java.io.PipedReader.read@POLYN203209 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method java.io.PipedReader.read@POLYN203209 the MagicNumber/String  'Write end dead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method java.io.PipedReader.read@POLYN203209 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method java.io.PipedReader.read@POLYN203209 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method java.io.PipedReader.read@POLYN203209 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method java.io.PipedReader.read@POLYN203209 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method java.io.PipedReader.read@POLYN203209 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method java.io.PipedReader.read@POLYN203209 the MagicNumber/String  'Pipe broken' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method java.io.PipedReader.read@POLYN203209 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method java.io.PipedReader.read@POLYN203209 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method java.io.PipedReader.read@POLYN203209 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#290"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00290] Lock statement on synchronized method read"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#290"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00290] For method read arguments char[]  cbuf|int  off|int  len"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#290"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00290] For method read list of called methods Object monObjet|int readN207156"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  'Pipe not connected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  'Pipe closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00295"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  'Write end dead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00310"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00310] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00322"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method java.io.PipedReader.read@POLYN205809 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#336"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00336] Lock statement on synchronized method ready"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00338"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00338] In method java.io.PipedReader.ready@POLYN208406 the MagicNumber/String  'Pipe not connected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00340"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00340] In method java.io.PipedReader.ready@POLYN208406 the MagicNumber/String  'Pipe closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method java.io.PipedReader.ready@POLYN208406 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00342"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00342] In method java.io.PipedReader.ready@POLYN208406 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00343"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method java.io.PipedReader.ready@POLYN208406 the MagicNumber/String  'Write end dead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method java.io.PipedReader.ready@POLYN208406 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method java.io.PipedReader.ready@POLYN208406 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00348"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method java.io.PipedReader.ready@POLYN208406 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00359"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#359"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00359] In method java.io.PipedReader.close@POLYN209293 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00360"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00360] In method java.io.PipedReader.close@POLYN209293 the MagicNumber/String  true should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/secujava/java.io.PipedReader.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
