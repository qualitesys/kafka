console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java 49 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.xml" 
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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
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
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "8"
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
 , "c4" : "29"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class ProcessorTopology contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument sourceNodesByTopic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method source arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method sink arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method isRepartitionTopic arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.hasStateWithChangelogs@POLYN196195 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.hasStateWithChangelogs@POLYN196195 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.hasPersistentLocalStore@POLYN196509 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.hasPersistentLocalStore@POLYN196509 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.hasPersistentGlobalStore@POLYN196784 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.hasPersistentGlobalStore@POLYN196784 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00130] For method updateSourceTopics arguments Map&lt;String ,List&lt;String &gt; &gt;  allSourceTopicsByNodeName"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#130"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00130] The argument allSourceTopicsByNodeName is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00133] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00134] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00136] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00144] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.updateSourceTopics@POLYN197051 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.updateSourceTopics@POLYN197051 the MagicNumber/String  'Unable to find source node {} in updated topics map {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.updateSourceTopics@POLYN197051 the MagicNumber/String  'Node ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.updateSourceTopics@POLYN197051 the MagicNumber/String  ' not found in full topology' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.updateSourceTopics@POLYN197051 the MagicNumber/String  'Updating source node {} with new topics {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.updateSourceTopics@POLYN197051 the MagicNumber/String  'Tried to subscribe topic {} to two nodes when updating topics from {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.updateSourceTopics@POLYN197051 the MagicNumber/String  'Topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.updateSourceTopics@POLYN197051 the MagicNumber/String  ' was already registered to source node ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#156"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00156] For method childrenToString arguments String  indent|List&lt;?  extends ProcessorNode&lt;? ,? ,? ,? &gt; &gt;  children"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.childrenToString@POLYN198720 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.childrenToString@POLYN198720 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.childrenToString@POLYN198720 the MagicNumber/String  '\tchildren:\t[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.childrenToString@POLYN198720 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.childrenToString@POLYN198720 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.childrenToString@POLYN198720 the MagicNumber/String  ']\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.toString@POLYN200189 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#183"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00183] For method toString arguments String  indent"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00186] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00187] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00196] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00197] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.toString@POLYN200418 the MagicNumber/String  'ProcessorTopology:\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.toString@POLYN200418 the MagicNumber/String  '\t' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.toString@POLYN200418 the MagicNumber/String  '\t' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.toString@POLYN200418 the MagicNumber/String  '\t' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#205"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00205] For method topicsToString arguments String  indent|List&lt;String &gt;  topics"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.topicsToString@POLYN202234 the MagicNumber/String  '\ttopics:\t\t[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.topicsToString@POLYN202234 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.topicsToString@POLYN202234 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.streams.processor.internals.ProcessorTopology.topicsToString@POLYN202234 the MagicNumber/String  ']\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#218"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00218] For method processorConnectedStateStores arguments String  processorName"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorTopology.java.html#178"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00178] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
