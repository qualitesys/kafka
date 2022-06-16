console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordsSend.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/DefaultRecordsSend.java 2 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordsSend.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00009"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordsSend.java.html#9"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00009] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordsSend.java.html#18"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00018] For method writeTo arguments TransferableChannel  channel|long  previouslyWritten|int  remaining"
}} 
]
};
console.log('leListeStr 99 main end');
