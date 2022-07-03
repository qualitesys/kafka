console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java 98 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "InputStream"
 , "c2" : "org.apache.kafka.common.compress.KafkaLZ4BlockInputStream"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.compress.KafkaLZ4BlockInputStream" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KafkaLZ4BlockInputStream"
 , "c2" : "KafkaLZ4BlockInputStream(ByteBuffer;BufferSupplier;boolean)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "ignoreFlagDescriptorChecksum()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "readHeader()"
 , "c3" : "7"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "readBlock()"
 , "c3" : "12"
 , "c4" : "20"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "read()"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "read(byte[];int;int)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "skip(long)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "available()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "mark(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "reset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "markSupported()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "detectBrokenLz4Version()"
 , "c3" : "1"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "30"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "62"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#62"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00062] The argument in is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#62"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00062] The argument bufferSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.KafkaLZ4BlockInputStream@POLYN204734 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.KafkaLZ4BlockInputStream@POLYN204734 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.readHeader@POLYN205703 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.readHeader@POLYN205703 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.readHeader@POLYN205703 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.readHeader@POLYN205703 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.readHeader@POLYN205703 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.readHeader@POLYN205703 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.readHeader@POLYN205703 the MagicNumber/String  0xFF should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.readBlock@POLYN207748 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.readBlock@POLYN207748 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.readBlock@POLYN207748 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.readBlock@POLYN207748 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.readBlock@POLYN207748 the MagicNumber/String  'Block size %d exceeded max: %d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.readBlock@POLYN207748 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.readBlock@POLYN207748 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.readBlock@POLYN207748 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.read@POLYN210343 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.read@POLYN210343 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.read@POLYN210343 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.read@POLYN210343 the MagicNumber/String  0xFF should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#186"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00186] For method read arguments byte[]  b|int  off|int  len"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.read@POLYN210823 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.read@POLYN210823 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.read@POLYN210823 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#204"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00204] For method skip arguments long  n"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.skip@POLYN211718 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.skip@POLYN211718 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.skip@POLYN211718 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.available@POLYN212418 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.available@POLYN212418 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#230"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00230] For method mark arguments int  readlimit"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.mark@POLYN212726 the MagicNumber/String  'mark not supported' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.reset@POLYN212876 the MagicNumber/String  'reset not supported' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.markSupported@POLYN213012 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  'Kafka has detected detected a buggy lz4-java library (&amp;lt; 1.4.x) on the classpath.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  ' If you are using Kafka client libraries, make sure your application does not' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  ' accidentally override the version provided by Kafka or include multiple versions' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  ' of the library on the classpath. The lz4-java version on the classpath should' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  ' match the version the Kafka client libraries depend on. Adding -verbose:class' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String  ' to your JVM arguments may help understand which lz4-java version is getting loaded.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 3 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 3 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 3 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 3 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 3 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#250"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00250] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#250"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00250] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00256] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00256] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00256] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00256] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00256] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#265"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00265] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#265"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00265] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#267"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00267] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String 'Kafka has detected detected a buggy lz4-java library -&amp;lt; 1.4.x- on the classpath.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#268"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00268] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String ' If you are using Kafka client libraries, make sure your application does not' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#269"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00269] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String ' accidentally override the version provided by Kafka or include multiple versions' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00270] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String ' of the library on the classpath. The lz4-java version on the classpath should' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#271"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00271] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String ' match the version the Kafka client libraries depend on. Adding -verbose:class' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/KafkaLZ4BlockInputStream.java.html#272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00272] In the recursive method org.apache.kafka.common.compress.KafkaLZ4BlockInputStream.detectBrokenLz4Version@POLYN213244 the MagicNumber/String ' to your JVM arguments may help understand which lz4-java version is getting loaded.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
