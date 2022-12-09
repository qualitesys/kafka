console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java 38 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#23"
 , "c1" : "CopartitionedTopicsEnforcer"
 , "c2" : "CopartitionedTopicsEnforcer(String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#29"
 , "c1" : "void"
 , "c2" : "enforce(Set<String>;Map<String,InternalTopicConfig>;Cluster)"
 , "c3" : "10"
 , "c4" : "18"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00100"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#100"
 , "c1" : "void"
 , "c2" : "maybeSetNumberOfPartitionsForInternalTopic(int;InternalTopicConfig)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00107"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#107"
 , "c1" : "int"
 , "c2" : "validateAndGetNumOfPartitions(Map<Object,InternalTopicConfig>;Collection<InternalTopicConfig>)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00136"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#136"
 , "c1" : "Supplier<TopologyException>"
 , "c2" : "emptyNumberOfPartitionsExceptionSupplier(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00140"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#140"
 , "c1" : "int"
 , "c2" : "getSamePartitions(Map<String,Integer>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00154"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#154"
 , "c1" : "int"
 , "c2" : "getMaxPartitions(Map<Object,InternalTopicConfig>)"
 , "c3" : "3"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "8"
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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method enforce arguments Set&lt;String &gt;  copartitionGroup|Map&lt;String ,InternalTopicConfig &gt;  allRepartitionTopicsNumPartitions|Cluster  metadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00029] For method enforce list of called methods Object monObjet|java.lang.String String_formatN165531|int validateAndGetNumOfPartitionsN166411|int getMaxPartitionsN166537|int getSamePartitionsN166644|java.util.Optional&lt;java.lang.Integer&gt; config_numberOfPartitionsN166900"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#29"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00029] The argument copartitionGroup is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#30"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00030] The argument allRepartitionTopicsNumPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#31"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00031] The argument metadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00089] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.enforce@POLYN164391 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.enforce@POLYN164391 the MagicNumber/String  '%sTopic not found: %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.enforce@POLYN164391 the MagicNumber/String  '%sNumber of partitions [%s] of repartition topic [%s] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.enforce@POLYN164391 the MagicNumber/String  'doesn't match number of partitions [%s] of the source topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method maybeSetNumberOfPartitionsForInternalTopic arguments int  numPartitionsToUseForRepartitionTopics|InternalTopicConfig  config"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#101"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00101] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00107] For method validateAndGetNumOfPartitions arguments Map&lt;Object ,InternalTopicConfig &gt;  repartitionTopicConfigs|Collection&lt;InternalTopicConfig &gt;  internalTopicConfigs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00107] For method validateAndGetNumOfPartitions list of called methods Object monObjet|java.util.Optional&lt;java.lang.Integer&gt; firstInternalTopicConfig_numberOfPartitionsN167966|java.util.Optional&lt;java.lang.Integer&gt; internalTopicConfig_numberOfPartitionsN168213"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#107"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00107] The argument repartitionTopicConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#108"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00108] The argument internalTopicConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00116] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00121] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00126] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.validateAndGetNumOfPartitions@POLYN167675 the MagicNumber/String  '%sFollowing topics do not have the same number of partitions: [%s]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method emptyNumberOfPartitionsExceptionSupplier arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.emptyNumberOfPartitionsExceptionSupplier@POLYN169091 the MagicNumber/String  'Number of partitions is not set for topic: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method getSamePartitions arguments Map&lt;String ,Integer &gt;  nonRepartitionTopicsInCopartitionGroup"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#140"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00140] The argument nonRepartitionTopicsInCopartitionGroup is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00144] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.getSamePartitions@POLYN169293 the MagicNumber/String  '%sTopics not co-partitioned: [%s]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00154] For method getMaxPartitions arguments Map&lt;Object ,InternalTopicConfig &gt;  repartitionTopicsInCopartitionGroup"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00154] For method getMaxPartitions list of called methods Object monObjet|java.util.Optional&lt;java.lang.Integer&gt; config_numberOfPartitionsN170410"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#154"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00154] The argument repartitionTopicsInCopartitionGroup is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00158] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.getMaxPartitions@POLYN170093 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.getMaxPartitions@POLYN170093 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.getMaxPartitions@POLYN170093 the MagicNumber/String  'Could not validate the copartitioning of topics: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.enforce@POLYN164391"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#45"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00045] In the recursive method org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.enforce@POLYN164391 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#46"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00046] In the recursive method org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.enforce@POLYN164391 the MagicNumber/String '%sTopic not found: %s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00089] In the recursive method org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.enforce@POLYN164391 the MagicNumber/String '%sNumber of partitions [%s] of repartition topic [%s] ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00090] In the recursive method org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.enforce@POLYN164391 the MagicNumber/String 'doesn't match number of partitions [%s] of the source topic.' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/CopartitionedTopicsEnforcer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
