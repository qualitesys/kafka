console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java 18 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.state.internals.OrderedBytes"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.OrderedBytes" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Bytes"
 , "c2" : "upperRange(Bytes;byte[])"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "Bytes"
 , "c2" : "lowerRange(Bytes;byte[])"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.svg" }

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
 , "c4" : "5"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00009"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class OrderedBytes contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#13"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00013] For method upperRange arguments Bytes  key|byte[]  maxSuffix"
}} 
,
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#13"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00013] For method upperRange list of called methods Object monObjet|byte[] key_getN167473|org.apache.kafka.common.utils.Bytes maxSuffixN167690"
}} 
,
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#13"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00013] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method org.apache.kafka.streams.state.internals.OrderedBytes.upperRange@POLYN167328 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method org.apache.kafka.streams.state.internals.OrderedBytes.upperRange@POLYN167328 the MagicNumber/String  0xFF should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.streams.state.internals.OrderedBytes.upperRange@POLYN167328 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.streams.state.internals.OrderedBytes.upperRange@POLYN167328 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.streams.state.internals.OrderedBytes.upperRange@POLYN167328 the MagicNumber/String  0xFF should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method lowerRange arguments Bytes  key|byte[]  minSuffix"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00045] For method lowerRange list of called methods Object monObjet|byte[] key_getN169044"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#45"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00045] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.OrderedBytes.upperRange@POLYN167328"
}} 
,
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#16"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00016] In the recursive method org.apache.kafka.streams.state.internals.OrderedBytes.upperRange@POLYN167328 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#16"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00016] In the recursive method org.apache.kafka.streams.state.internals.OrderedBytes.upperRange@POLYN167328 the MagicNumber/String 0xFF MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#20"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00020] In the recursive method org.apache.kafka.streams.state.internals.OrderedBytes.upperRange@POLYN167328 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#28"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00028] In the recursive method org.apache.kafka.streams.state.internals.OrderedBytes.upperRange@POLYN167328 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/OrderedBytes.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00031] In the recursive method org.apache.kafka.streams.state.internals.OrderedBytes.upperRange@POLYN167328 the MagicNumber/String 0xFF MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
