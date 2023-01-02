console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java 27 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.utils.ByteBufferUnmapper"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.ByteBufferUnmapper" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#64"
 , "c1" : "ByteBufferUnmapper"
 , "c2" : "ByteBufferUnmapper()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#74"
 , "c1" : "void"
 , "c2" : "unmap(String;ByteBuffer)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#87"
 , "c1" : "MethodHandle"
 , "c2" : "lookupUnmapMethodHandle()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00100"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#100"
 , "c1" : "MethodHandle"
 , "c2" : "unmapJava7Or8(MethodHandles.Lookup)"
 , "c3" : "1"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00125"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#125"
 , "c1" : "MethodHandle"
 , "c2" : "unmapJava9(MethodHandles.Lookup)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00135"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#135"
 , "c1" : "boolean"
 , "c2" : "nonNull(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method unmap arguments String  resourceDescription|ByteBuffer  buffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmap@POLYN161995 the MagicNumber/String  'Unmapping only works with direct buffers' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmap@POLYN161995 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmap@POLYN161995 the MagicNumber/String  'Unable to unmap the mapped buffer: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.common.utils.ByteBufferUnmapper.lookupUnmapMethodHandle@POLYN162591 the MagicNumber/String  'Unmapping is not supported on this platform, because internal ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.common.utils.ByteBufferUnmapper.lookupUnmapMethodHandle@POLYN162591 the MagicNumber/String  'Java APIs are not compatible with this Kafka version' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method unmapJava7Or8 arguments MethodHandles.Lookup  lookup"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00100] For method unmapJava7Or8 list of called methods Object monObjet|java.lang.Class Class_forNameN163521"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#100"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00100] The argument lookup is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN163099 the MagicNumber/String  'java.nio.DirectByteBuffer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN163099 the MagicNumber/String  'cleaner' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN163099 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN163099 the MagicNumber/String  'clean' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN163099 the MagicNumber/String  'nonNull' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN163099 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN163099 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00125] For method unmapJava9 arguments MethodHandles.Lookup  lookup"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00125] For method unmapJava9 list of called methods Object monObjet|java.lang.Class Class_forNameN165190|V f_getN165662"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#125"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00125] The argument lookup is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava9@POLYN165058 the MagicNumber/String  'sun.misc.Unsafe' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava9@POLYN165058 the MagicNumber/String  'invokeCleaner' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava9@POLYN165058 the MagicNumber/String  'theUnsafe' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava9@POLYN165058 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava9@POLYN165058 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method nonNull arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.common.utils.ByteBufferUnmapper.nonNull@POLYN165813 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
