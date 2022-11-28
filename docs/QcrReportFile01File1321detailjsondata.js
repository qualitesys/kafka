console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java 23 rule violations " 
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
 , "c5" : "00034"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#34"
 , "c1" : "QuorumFeatures"
 , "c2" : "QuorumFeatures(int;ApiVersions;Map<String,VersionRange>;List<Integer>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#46"
 , "c1" : "QuorumFeatures"
 , "c2" : "create(int;ApiVersions;Map<String,VersionRange>;Collection<Node>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#56"
 , "c1" : "Map<String,VersionRange>"
 , "c2" : "defaultFeatureMap()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#65"
 , "c1" : "Optional<String>"
 , "c2" : "reasonNotSupported(String;short)"
 , "c3" : "11"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00101"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#101"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
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
 , "c1" : "00024"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00024] The class QuorumFeatures contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method create arguments int  nodeId|ApiVersions  apiVersions|Map&lt;String ,VersionRange &gt;  localSupportedFeatures|Collection&lt;Node &gt;  quorumNodes"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument quorumNodes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.controller.QuorumFeatures.defaultFeatureMap@POLYN161282 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method reasonNotSupported arguments String  featureName|short  level"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00065] For method reasonNotSupported list of called methods Object monObjet|org.apache.kafka.clients.NodeApiVersions apiVersions_getN162947|java.util.Map&lt;java.lang.String,org.apache.kafka.common.feature.SupportedVersionRange&gt; nodeVersions_supportedFeaturesN163280"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00079] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00084] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00085] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN161970 the MagicNumber/String  'Local controller ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN161970 the MagicNumber/String  ' does not support this feature.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN161970 the MagicNumber/String  'Local controller ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN161970 the MagicNumber/String  ' only supports versions ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN161970 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN161970 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN161970 the MagicNumber/String  'Controller ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN161970 the MagicNumber/String  ' does not support this feature.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN161970 the MagicNumber/String  'Controller ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN161970 the MagicNumber/String  ' only supports versions ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN161970 the MagicNumber/String  'Unable to get feature level information for controller(s): ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.controller.QuorumFeatures.reasonNotSupported@POLYN161970 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method localSupportedFeature arguments String  featureName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.html#56"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00056] Public method defaultFeatureMap is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumFeatures.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
