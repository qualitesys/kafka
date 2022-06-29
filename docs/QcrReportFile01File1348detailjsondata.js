console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java 53 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.metadata.BrokerRegistration"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.metadata.BrokerRegistration" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Map<String,Endpoint>"
 , "c2" : "listenersToMap(Collection<Endpoint>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "BrokerRegistration"
 , "c2" : "BrokerRegistration(int;long;Uuid;List<Endpoint>;Map<String,VersionRange>;Optional<String>;boolean;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "BrokerRegistration"
 , "c2" : "BrokerRegistration(int;long;Uuid;Map<String,Endpoint>;Map<String,VersionRange>;Optional<String>;boolean;boolean)"
 , "c3" : "3"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "BrokerRegistration"
 , "c2" : "fromRecord(RegisterBrokerRecord)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "id()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "epoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Uuid"
 , "c2" : "incarnationId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Endpoint>"
 , "c2" : "listeners()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Optional<Node>"
 , "c2" : "node(String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,VersionRange>"
 , "c2" : "supportedFeatures()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Optional<String>"
 , "c2" : "rack()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "fenced()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "inControlledShutdown()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ApiMessageAndVersion"
 , "c2" : "toRecord(MetadataVersion)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "BrokerRegistration"
 , "c2" : "cloneWith(Optional<Boolean>;Optional<Boolean>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.svg" }

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
 , "c4" : "16"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
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
 , "c4" : "18"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00026] The class BrokerRegistration contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method listenersToMap arguments Collection&lt;Endpoint &gt;  listeners"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument listeners is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.metadata.BrokerRegistration.BrokerRegistration@POLYN199102 the MagicNumber/String  'Broker listeners must be named.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method fromRecord arguments RegisterBrokerRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#83"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00083] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method node arguments String  listenerName"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00122] For method node list of called methods Object monObjet|java.util.Optional&lt;org.apache.kafka.common.Node&gt; listenersN202754"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.metadata.BrokerRegistration.node@POLYN202657 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.metadata.BrokerRegistration.node@POLYN202657 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#146"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00146] For method toRecord arguments MetadataVersion  metadataVersion"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#146"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00146] The argument metadataVersion is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00159] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.metadata.BrokerRegistration.toRecord@POLYN203626 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#185"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00185] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.metadata.BrokerRegistration.equals@POLYN205602 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String  'BrokerRegistration(id=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String  ', epoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String  ', incarnationId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String  ', listeners=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String  '], supportedFeatures={' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String  ', rack=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String  ', fenced=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String  ', inControlledShutdown=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#220"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00220] For method cloneWith arguments Optional&lt;Boolean &gt;  fencingChange|Optional&lt;Boolean &gt;  inControlledShutdownChange"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#221"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00221] The argument fencingChange is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#222"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00222] The argument inControlledShutdownChange is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.metadata.BrokerRegistration.cloneWith@POLYN208153"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.metadata.BrokerRegistration.fromRecord@POLYN200810"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.metadata.BrokerRegistration.node@POLYN202657"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.metadata.BrokerRegistration.toRecord@POLYN203626"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00124] In the recursive method org.apache.kafka.metadata.BrokerRegistration.node@POLYN202657 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00127] In the recursive method org.apache.kafka.metadata.BrokerRegistration.node@POLYN202657 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00149] In the recursive method org.apache.kafka.metadata.BrokerRegistration.toRecord@POLYN203626 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#201"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00201] In the recursive method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String 'BrokerRegistration-id=' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#202"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00202] In the recursive method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String ', epoch=' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#203"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00203] In the recursive method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String ', incarnationId=' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#204"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00204] In the recursive method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String ', listeners=[' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#207"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00207] In the recursive method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String ', ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#208"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00208] In the recursive method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String '], supportedFeatures={' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#210"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00210] In the recursive method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String ': ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#211"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00211] In the recursive method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String ', ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#212"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00212] In the recursive method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String '}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#213"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00213] In the recursive method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String ', rack=' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00214] In the recursive method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String ', fenced=' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#215"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00215] In the recursive method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String ', inControlledShutdown=' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/BrokerRegistration.java.html#216"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00216] In the recursive method org.apache.kafka.metadata.BrokerRegistration.toString@POLYN206376 the MagicNumber/String '-' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
