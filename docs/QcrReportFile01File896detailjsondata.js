console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java 6 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.xml" 
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
 , "c5" : "00023"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#23"
 , "c1" : "Crc32C"
 , "c2" : "Crc32C()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#26"
 , "c1" : "long"
 , "c2" : "compute(byte[];int;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#33"
 , "c1" : "long"
 , "c2" : "compute(ByteBuffer;int;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#39"
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
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
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
 , "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method compute arguments byte[]  bytes|int  offset|int  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00026] For method compute list of called methods Object monObjet|java.util.zip.Checksum createN154865"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method compute arguments ByteBuffer  buffer|int  offset|int  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00033] For method compute list of called methods Object monObjet|java.util.zip.Checksum createN155457"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#26"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00026] Public method compute is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.html#33"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00033] Public method compute is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Crc32C.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
