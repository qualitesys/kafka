console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.utils.Crc32C"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.Crc32C" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#46"
 , "c1" : "Crc32C"
 , "c2" : "Crc32C()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#56"
 , "c1" : "long"
 , "c2" : "compute(byte[];int;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#70"
 , "c1" : "long"
 , "c2" : "compute(ByteBuffer;int;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#76"
 , "c1" : "Checksum"
 , "c2" : "create()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
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
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method compute arguments byte[]  bytes|int  offset|int  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00056] For method compute list of called methods Object monObjet|java.util.zip.Checksum createN161583"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method compute arguments ByteBuffer  buffer|int  offset|int  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00070] For method compute list of called methods Object monObjet|java.util.zip.Checksum createN162175"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#56"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00056] Public method compute is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00070] Public method compute is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.Crc32C.Java9ChecksumFactory.create@POLYN163153"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
