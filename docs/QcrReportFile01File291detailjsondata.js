console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/compress/ZstdFactory.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/compress/ZstdFactory.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.compress.ZstdFactory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.compress.ZstdFactory" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/compress/ZstdFactory.java.html#37"
 , "c1" : "ZstdFactory"
 , "c2" : "ZstdFactory()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/compress/ZstdFactory.java.html#39"
 , "c1" : "OutputStream"
 , "c2" : "wrapForOutput(ByteBufferOutputStream)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/compress/ZstdFactory.java.html#49"
 , "c1" : "InputStream"
 , "c2" : "wrapForInput(ByteBuffer;byte;BufferSupplier)"
 , "c3" : "1"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/ZstdFactory.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/ZstdFactory.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method wrapForOutput arguments ByteBufferOutputStream  buffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/ZstdFactory.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.common.compress.ZstdFactory.wrapForOutput@POLYN157050 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/ZstdFactory.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.common.compress.ZstdFactory.wrapForOutput@POLYN157050 the MagicNumber/String  1024 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/ZstdFactory.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method wrapForInput arguments ByteBuffer  buffer|byte  messageVersion|BufferSupplier  decompressionBufferSupplier"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/ZstdFactory.java.html#49"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00049] The argument decompressionBufferSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/ZstdFactory.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.common.compress.ZstdFactory.wrapForInput@POLYN157456 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/ZstdFactory.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.common.compress.ZstdFactory.wrapForInput@POLYN157456 the MagicNumber/String  1024 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/compress/ZstdFactory.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
