console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java 22 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.controller.QuorumFeatures"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.QuorumFeatures" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#51"
 , "c1" : "QuorumFeatures"
 , "c2" : "QuorumFeatures(int;ApiVersions;Map&lt;String,VersionRange&gt;;List&lt;Integer&gt;)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#63"
 , "c1" : "QuorumFeatures"
 , "c2" : "create(int;ApiVersions;Map&lt;String,VersionRange&gt;;Collection&lt;Node&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00073"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#73"
 , "c1" : "Map&lt;String,VersionRange&gt;"
 , "c2" : "defaultFeatureMap()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#88"
 , "c1" : "Optional&lt;String&gt;"
 , "c2" : "reasonNotSupported(String;short)"
 , "c3" : "11"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00124"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#124"
 , "c1" : "VersionRange"
 , "c2" : "localSupportedFeature(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "13"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method create arguments int  nodeId|ApiVersions  apiVersions|Map&lt;String ,VersionRange &gt;  localSupportedFeatures|Collection&lt;Node &gt;  quorumNodes"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#67"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00067] The argument quorumNodes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.controller.QuorumFeatures.defaultFeatureMap@POLYN162700 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method reasonNotSupported arguments String  featureName|short  level"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00088] For method reasonNotSupported list of called methods Object monObjet|V localSupportedFeatures_getOrDefaultN163510|org.apache.kafka.clients.NodeApiVersions apiVersions_getN164365|java.util.Map nodeVersions_supportedFeaturesN164698"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00102] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00107] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00108] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN163388 the MagicNumber/String  'Local controller ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN163388 the MagicNumber/String  ' does not support this feature.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN163388 the MagicNumber/String  'Local controller ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN163388 the MagicNumber/String  ' only supports versions ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN163388 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN163388 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN163388 the MagicNumber/String  'Controller ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN163388 the MagicNumber/String  ' does not support this feature.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN163388 the MagicNumber/String  'Controller ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN163388 the MagicNumber/String  ' only supports versions ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN163388 the MagicNumber/String  'Unable to get feature level information for controller(s): ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN163388 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method localSupportedFeature arguments String  featureName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00073] Public method defaultFeatureMap is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
