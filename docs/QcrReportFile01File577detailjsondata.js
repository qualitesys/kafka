console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java 10 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Send"
 , "c2" : "org.apache.kafka.common.record.RecordsSend"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.RecordsSend" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00019"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html#19"
 , "c1" : "RecordsSend"
 , "c2" : "RecordsSend(T;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html#26"
 , "c1" : "boolean"
 , "c2" : "completed()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html#31"
 , "c1" : "long"
 , "c2" : "writeTo(TransferableChannel)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html#49"
 , "c1" : "long"
 , "c2" : "size()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html#53"
 , "c1" : "T"
 , "c2" : "records()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html#58"
 , "c1" : "long"
 , "c2" : "writeTo(TransferableChannel;long;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
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
 , "c1" : "00011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class RecordsSend contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.common.record.RecordsSend.completed@POLYN151311 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method writeTo arguments TransferableChannel  channel"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html#31"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00031] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.common.record.RecordsSend.writeTo@POLYN151471 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.common.record.RecordsSend.writeTo@POLYN151471 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.common.record.RecordsSend.writeTo@POLYN151471 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.record.RecordsSend.writeTo@POLYN151471 the MagicNumber/String  'Wrote negative bytes to channel. This shouldn't happen.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.common.record.RecordsSend.writeTo@POLYN151471 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsSend.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method writeTo arguments TransferableChannel  channel|long  previouslyWritten|int  remaining"
}} 
]
};
console.log('leListeStr 99 main end');
