console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateRestoreCallbackAdapter.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/StateRestoreCallbackAdapter.java 6 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateRestoreCallbackAdapter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.StateRestoreCallbackAdapter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.StateRestoreCallbackAdapter" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "StateRestoreCallbackAdapter"
 , "c2" : "StateRestoreCallbackAdapter()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "RecordBatchingStateRestoreCallback"
 , "c2" : "adapt(StateRestoreCallback)"
 , "c3" : "7"
 , "c4" : "8"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateRestoreCallbackAdapter.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateRestoreCallbackAdapter.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
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
   "c1" : "00014"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateRestoreCallbackAdapter.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class StateRestoreCallbackAdapter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateRestoreCallbackAdapter.java.html#17"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00017] For method adapt arguments StateRestoreCallback  restoreCallback"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateRestoreCallbackAdapter.java.html#17"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00017] The argument restoreCallback is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateRestoreCallbackAdapter.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method org.apache.kafka.streams.processor.internals.StateRestoreCallbackAdapter.adapt@POLYN164391 the MagicNumber/String  'stateRestoreCallback must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateRestoreCallbackAdapter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StateRestoreCallbackAdapter.adapt@POLYN164391"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateRestoreCallbackAdapter.java.html#18"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00018] In the recursive method org.apache.kafka.streams.processor.internals.StateRestoreCallbackAdapter.adapt@POLYN164391 the MagicNumber/String 'stateRestoreCallback must not be null' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
