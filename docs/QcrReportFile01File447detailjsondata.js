console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java 26 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.internals.PartitionStates"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.internals.PartitionStates" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "PartitionStates"
 , "c2" : "PartitionStates()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "moveToEnd(TopicPartition)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateAndMoveToEnd(TopicPartition;S)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "update(TopicPartition;S)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "remove(TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "partitionSet()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clear()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "contains(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Iterator<S>"
 , "c2" : "stateIterator()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "forEach(BiConsumer<TopicPartition,S>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,S>"
 , "c2" : "partitionStateMap()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<S>"
 , "c2" : "partitionStateValues()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "S"
 , "c2" : "stateValue(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "size()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "set(Map<TopicPartition,S>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateSize()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "update(Map<TopicPartition,S>)"
 , "c3" : "4"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.svg" }

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
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
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
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00017] The class PartitionStates contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method moveToEnd arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN187503 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method updateAndMoveToEnd arguments TopicPartition  topicPartition|S  state"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method update arguments TopicPartition  topicPartition|S  state"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method remove arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method contains arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method forEach arguments BiConsumer&lt;TopicPartition ,S &gt;  biConsumer"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method stateValue arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method set arguments Map&lt;TopicPartition ,S &gt;  partitionToState"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method update arguments Map&lt;TopicPartition ,S &gt;  partitionToState"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#100"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00100] The argument partitionToState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00103] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00107] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00108] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00108] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00114] The class PartitionState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00131] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.common.internals.PartitionStates.PartitionState.equals@POLYN192273 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.common.internals.PartitionStates.PartitionState.equals@POLYN192273 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.common.internals.PartitionStates.PartitionState.equals@POLYN192273 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.common.internals.PartitionStates.PartitionState.hashCode@POLYN192873 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.common.internals.PartitionStates.PartitionState.toString@POLYN193254 the MagicNumber/String  'PartitionState(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.common.internals.PartitionStates.PartitionState.toString@POLYN193254 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/PartitionStates.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.common.internals.PartitionStates.PartitionState.toString@POLYN193254 the MagicNumber/String  ')' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
