console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/UnalignedFileRecords.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/UnalignedFileRecords.java 2 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "UnalignedRecords"
 , "c2" : "org.apache.kafka.common.record.UnalignedFileRecords"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.UnalignedFileRecords" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/UnalignedFileRecords.java.html#33"
 , "c1" : "UnalignedFileRecords"
 , "c2" : "UnalignedFileRecords(FileChannel;long;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/UnalignedFileRecords.java.html#40"
 , "c1" : "int"
 , "c2" : "sizeInBytes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/UnalignedFileRecords.java.html#45"
 , "c1" : "long"
 , "c2" : "writeTo(TransferableChannel;long;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/record/UnalignedFileRecords.java.svg" }

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
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/UnalignedFileRecords.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method writeTo arguments TransferableChannel  destChannel|long  previouslyWritten|int  remaining"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/UnalignedFileRecords.java.html#45"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00045] The argument destChannel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/record/UnalignedFileRecords.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
