console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java 16 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.xml" 
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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
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
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00010"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class TimelineObject contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00011"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class ObjectContainer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method setValue arguments T  value"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method mergeFrom arguments long  destinationEpoch|Delta  delta"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html#27"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00027] Void method mergeFrom is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html#27"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00027] Void method mergeFrom is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html#36"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00036] The argument snapshotRegistry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method get arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00052] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00053] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.timeline.TimelineObject.get@POLYN165789 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method set arguments T  newValue"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.timeline.TimelineObject.set@POLYN166484 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method executeRevert arguments long  targetEpoch|Delta  delta"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineObject.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.timeline.TimelineObject.equals@POLYN168009 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
